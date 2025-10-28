import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Book.module.css';
 

/**
 * Een component om één boek weer te geven.
 *
 * Props:
 *  - title: string, de titel van het boek
 *  - author: string, de auteur van het boek
 *  - image: string, pad naar de afbeelding
 */
const Book = ({ title, author, image }) => {
  return (
    <div className={styles.book}>
      <img
        src={image}
        alt={`Omslag van ${title}`}
        className={styles.bookImage}
      />
      <div className={styles.textContainer}>
        <h2 className={styles.bookTitle}>{title}</h2>
        <p className={styles.bookAuthor}>{author}</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Book;