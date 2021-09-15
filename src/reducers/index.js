const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    /*{
      id: 1,
      title: 'Book 1',
      count: 2,
      total: 200
    },
    {
      id: 2,
      title: 'Book 2',
      count: 3,
      total: 150
    }*/
  ], 
  orderTotal: 350
};

const updateCartItem = (book, item = {}) => {
  const { 
    id = book.id, 
    title = book.title, 
    count = 0, 
    total = 0 } = item;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
      const item = state.cartItems[itemIndex];
      const newItem = updateCartItem(book, item);
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };

    default:
      return state;
  }
};

export default reducer;