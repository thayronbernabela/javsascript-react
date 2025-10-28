import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Book.module.css";

/**
 * Component om één boek weer te geven.
 * Props:
 *  - title: string, titel van het boek
 *  - author: string, auteur van het boek
 *  - image: string, pad naar de afbeelding
 */
const Book = ({ title, author, image }) => {
  // ✅ Stap 1: state voor aantal keer gelezen
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  // ✅ Stap 2: functie om teller te verhogen
  const verhoogTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };

  return (
    <div className={styles.book}>
      <img src={image} alt={`Omslag van ${title}`} className={styles.bookImage} />
      <h2 className={styles.bookTitle}>{title}</h2>
      <p className={styles.bookAuthor}>Door {author}</p>
      {/* ✅ Stap 3: button voor aantal keer gelezen */}
      <button className={styles.leesButton} onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Book;
