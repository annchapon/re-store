import React, { Component } from 'react';
import BookListItem from '../book-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem 
                book={book} 
                onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          )
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    /* 1. receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    2. dispatch action to store
    this.props.booksLoaded(data); */

    /* const {
      bookstoreService, 
      booksLoaded, 
      booksRequested, 
      booksError } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err)); */

    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
  return {
    books,
    loading,
    error
  };
};

/* const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
}; */

/* const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: () => {
      // console.log('Fetching books');
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)))
    }
  };
}; */

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);