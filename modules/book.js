export default class Book {
  constructor() {
    if (localStorage.getItem('books') === null) {
      this.booksInLS = localStorage.setItem('books', JSON.stringify([]));
    } else {
      this.booksInLS = JSON.parse(localStorage.getItem('books'));
    }
  }

  add(title, author) {
    this.booksInLS.push({title, author});
    localStorage.setItem('books', JSON.stringify(this.booksInLS));
  }

  remove(bookIdx) {
    this.booksInLS.splice(bookIdx, 1);
    localStorage.setItem('books', JSON.stringify(this.booksInLS));
  }
}
