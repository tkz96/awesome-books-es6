import Book from './modules/book.js';
import * as luxon from './modules/luxon.js';

const bookObj = new Book();

const addBookButton = document.getElementById('addBook');

addBookButton.addEventListener('click', (event) => {
  event.preventDefault();
  addBook();

  const form = document.getElementById('book-add')
  form.reset();
});


const generateListOfBooks = (books) => {
  let items = [];

  for (const [i, book] of books.entries()) {
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

  for (const btn of btns) {
    btn.addEventListener('click', removeBook);
  }
}

const addBook = () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  bookObj.add(bookTitle, bookAuthor);

  showBooks();
}

const removeBook = (event)  => {
  const bookId = event.target.dataset['bookidx'];
  bookObj.remove(bookId);

  showBooks();
}

const displayDateTime = () => {
  const date = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_SHORT_WITH_SECONDS);
  
  document.getElementById('show-date').innerHTML = date;
  setTimeout(displayDateTime, 1000);
}

displayDateTime();
window.onload = showBooks()