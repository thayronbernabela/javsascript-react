import React from 'react';
import BookList from '../components/booklist.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Top 3 Bestseller Boeken</h1>
      <BookList />
    </div>
  );
}

export default App;