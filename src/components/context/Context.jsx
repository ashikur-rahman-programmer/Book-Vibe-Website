import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const Context = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistWishList = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistWishList) {
      toast.error("Already in Wishlist ");
      return;
    }
    const isExist = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      toast.error("This book is already in your read list ");
      return;
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} added to Read List`);
    }
  };
  const handleWishList = (currentBook) => {
    const isExistInRead = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInRead) {
      toast.error("Already in Read List");
      return;
    }
    const isExist = wishList.find((book) => book.bookId === currentBook.bookId);
    if (isExist) {
      toast.error("Already in Wishlist ");
      return;
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} added to Wishlist`);
    }
  };

  const data = {
    handleMarkAsRead,
    storedBooks,
    setStoredBooks,
    handleWishList,
    wishList,
    setWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default Context;
