import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchView from './SearchView.jsx';
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#search">Search Books</a></li>
            <li><a href="#submit-review">Submit Review</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Welcome to Book Review and Recommendation Platform</h1>
          <p>Discover new books, read reviews, and share your thoughts with our community!</p>
          <button>Get Started</button>
        </section>
      </main>
    </div>
  );
}

export default App;
