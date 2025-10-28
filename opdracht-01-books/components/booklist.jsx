import React from 'react';
import Book from './book.jsx';
import books from './data/books.jsx';
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