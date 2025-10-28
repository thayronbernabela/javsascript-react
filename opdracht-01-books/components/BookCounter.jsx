import PropTypes from 'prop-types';

/**
 * Toont het totaal aantal boeken in de lijst.
 *
 * Props:
 *  - aantal: number, het aantal boeken
 */
const BookCounter = ({ aantal }) => {
  return (
    <h2>Totaal aantal boeken in de lijst: {aantal}</h2>
  );
};

BookCounter.propTypes = {
  aantal: PropTypes.number.isRequired,
};

export default BookCounter;
