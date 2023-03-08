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
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book)
  };
  return (
    <section className="booklist">
      {/* <EventExamples /> */}
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook}/>;
      })}
    </section>
  );
};

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target);
//     console.log(e.target.name);
//     console.log(e.target.value);
//     console.log('handle form input');
//   };
//   const handleButtonClick = () => {
//     alert('handle button click');
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('form submitted');
//   };
//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <h2>Typical Form</h2>
//         <input type="text" name="product" onChange={handleFormInput} style={{ margin: '1rem 0' }} />
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// };

const Book = (props) => {
  // console.log(props);
  const { img, title, author, getBook, id } = props;
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={getSingleBook}>click me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
