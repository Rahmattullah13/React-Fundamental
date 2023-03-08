import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL900_SR900,600_.jpg',
    id: 1,
  },

  {
    author: 'Rick Rubin',
    title: 'The Creative Act: A Way of Being',
    img: 'https://images-na.ssl-images-amazon.com/images/I/A1YhM3oRFbL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

// Create component
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
