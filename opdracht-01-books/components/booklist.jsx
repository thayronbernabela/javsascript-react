import React from 'react';
import Book from './Book.jsx';
import books from './data/Books.js';
import styles from '../styles/BookList.module.css';

/**
 * Container component die alle boeken toont (top 3).
 * Kan later eenvoudig worden uitgebreid.
 */
const BookList = () => {
  return (
    <div className={styles.bookList}>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </div>
  );
};

export default BookList;