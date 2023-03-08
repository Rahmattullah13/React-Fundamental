import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

// Create component
const BookList = () => {
  return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className="booklist">
      {/* <EventExamples /> */}
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
      </>
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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
