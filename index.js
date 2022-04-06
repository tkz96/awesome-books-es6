import Book from './modules/book.js'; //eslint-disable-line
import * as luxon from './modules/luxon.js'; //eslint-disable-line

const bookObj = new Book();

const addBookButton = document.getElementById('addBook');

addBookButton.addEventListener('click', (event) => {
  event.preventDefault();
  addBook(); //eslint-disable-line

  const form = document.getElementById('book-add')
  form.reset();
});

const generateListOfBooks = (books) => {
  let items = [];
  const bks = books;
  for (const [i, book] of bks.entries()) { //eslint-disable-line
    items.push(`
      <div class="bookDesc">
      <li>${book.title} by ${book.author}</li> <button data-bookidx="${i}" class="removeBtn">Remove</button>
    </div>
    `);
  }
  return items.join('');
}

const showBooks = () => {
  const booksDiv = document.getElementById('booksDiv');

  booksDiv.innerHTML = `
    <h3>All Awesome Books</h3>
    <ul id="theBooks">
      ${generateListOfBooks(bookObj.booksInLS)}
    </ul>
  `;

  const btns = document.getElementsByClassName('removeBtn');

  for (const btn of btns) { //eslint-disable-line
    btn.addEventListener('click', removeBook); //eslint-disable-line
  }
}

const addBook = () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  bookObj.add(bookTitle, bookAuthor);

  showBooks();
}

const removeBook = (event)  => { //eslint-disable-line

  const bookId = event.target.dataset['bookidx'];
  bookObj.remove(bookId);

  showBooks();
}

const displayDateTime = () => {
  const date = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS);
  
  document.getElementById('show-date').innerHTML = date;
  setTimeout(displayDateTime, 1000);
}

const bs = document.querySelector('.bookSection');
const fs = document.querySelector('.formSection');
const cs = document.querySelector('.contactSection');

document.getElementById('book-list-switch').addEventListener('click', () => {
  bs.classList.add('active');
  fs.classList.remove('active');
  cs.classList.remove('active');
});

document.getElementById('add-book-switch').addEventListener('click', () => {
  bs.classList.remove('active');
  fs.classList.add('active');
  cs.classList.remove('active');
});

document.getElementById('contact-switch').addEventListener('click', () => {
  bs.classList.remove('active');
  fs.classList.remove('active');
  cs.classList.add('active');
});

displayDateTime();
window.onload = showBooks()
