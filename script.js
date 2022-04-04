/* eslint-disable no-unused-vars */

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const addBookButton = document.getElementById('addBook');
const booksDiv = document.getElementById('booksDiv');
const myForm = document.querySelector('form');
const showDate = document.querySelector('.showDate');

const booksInLS = [];

class Book {
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

const obj = new Book();

function generateListOfBooks(arg) {
  let items = '';
  for (let i = 0; i < arg.length; i += 1) {
    items += `
      <div class="bookDesc">
        <li>${arg[i].title} by ${arg[i].author}</li> <button class="removeBtn" onclick="removeBook(${i})">Remove</button>
      </div>
    `;
  }
  return items;
}

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const date = `${month}/${day}/${year}, ${hour}:${minutes}:${seconds}`;

showDate.innerHTML = `${date.toString()}`;

function showBooks() {
  myForm.reset();
  booksDiv.innerHTML = `
    <h3>All Awesome Books</h3>
    <ul id="theBooks"> <br />
      ${generateListOfBooks(obj.booksInLS)}</ul>
  `;
}

function addBook(title, author) {
  obj.thisOneActuallyAddsTheBook(title, author);
  showBooks();
}

function removeBook(i) {
  obj.thisOneActuallyRemovesTheBook(i);
  showBooks();
}

addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(bookTitle.value, bookAuthor.value);
});

/* eslint-enable no-unused-vars */