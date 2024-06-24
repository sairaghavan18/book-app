const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://sairaghavan2003:<password>@cluster0.oazdl62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define schema for your books collection (if not already defined)
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  // Add more fields as needed
});

const Book = mongoose.model('Book', bookSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Define the API endpoint for searching books
app.get('/api/search', async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const books = await Book.find({ $text: { $search: searchQuery } });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
