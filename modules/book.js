import { bookTitle, bookAuthor } from './declarations.js';

const booksInLS = ["hello"];

export default class Book {
  constructor() {
    if (localStorage.getItem('list of Books') === null) {
      this.booksInLS = localStorage.setItem('list of Books', JSON.stringify([]));
    } else {
      this.booksInLS = JSON.parse(localStorage.getItem('list of Books'));
    }
  }

  thisOneActuallyAddsTheBook(bookTitle, bookAuthor) {
    this.booksInLS.push({
      title: bookTitle,
      author: bookAuthor,
    });
    localStorage.setItem('list of Books', JSON.stringify(this.booksInLS));
  }

  thisOneActuallyRemovesTheBook(i) {
    this.booksInLS.splice(i, 1);
    localStorage.setItem('list of Books', JSON.stringify(this.booksInLS));

  }

}
