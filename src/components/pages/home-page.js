import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
  return (
    <div>
      <p>Home Page</p>
      <BookList books={[]} />
    </div>
  );
};

export default HomePage;