import React, { useState, useEffect } from 'react';

function SearchView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchQuery) {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/search?q=${searchQuery}`);
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Search for Books</h1>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for books" />
      {loading? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <h2>{book.title}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchView;