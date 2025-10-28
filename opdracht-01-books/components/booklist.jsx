import { useState } from 'react';
import Book from './Book';
import '../styles/BookList.css'; 

const BookList = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Een voor een',
      author: 'Freida McFadden',
      image: '/images/een voor een (freida).jpg',
    },
    {
      id: 2,
      title: 'Het ultieme geheim',
      author: 'Dan Brown',
      image: '/images/het ultieme geheim (dan brown).jpg',
    },
    {
      id: 3,
      title: 'De zwevende wereld',
      author: 'Annejet van der Zijl',
      image: '/images/de zwevende wereld (annejet).jpg',
    },
  ]);

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id} // belangrijk voor React lists
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </div>
  );
};

export default BookList;