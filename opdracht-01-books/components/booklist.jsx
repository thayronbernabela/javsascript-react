import Book from './Book';
import BookCounter from './BookCounter';
import books from './data/books';
import styles from '../styles/BookList.module.css';

/**
 * Container component die alle boeken toont (top 3).
 * Toont ook het totaal aantal boeken boven de lijst.
 */
const BookList = () => {
  return (
    <section className={styles.bookListSection}>
      {/* Totaal aantal boeken */}
      <BookCounter aantal={books.length} />

      {/* Lijst van boeken */}
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
    </section>
  );
};

export default BookList;