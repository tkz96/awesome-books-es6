/* eslint-disable no-unused-vars */
import * as Declarations from './modules/declarations.js';
import Book from './modules/book.js';
const removeBtn = document.querySelectorAll('.removeBtn');
console.log(removeBtn);

const obj = new Book();

function generateListOfBooks(x) {
  let items = '';
  for (let i = 0; i < x.length; i += 1) {
    items += `
      <div class="bookDesc">
        <li>${x[i].title} by ${x[i].author}</li> <button class="removeBtn" data-id="${i}">Remove</button>
      </div>
    `;
  }
  return items;
}

function showBooks() {
  Declarations.myForm.reset();
  Declarations.booksDiv.innerHTML = `
    <h3>All Awesome Books</h3>
    <ul id="theBooks"> <br />
      ${generateListOfBooks(obj.booksInLS)}</ul>
  `;
}

function addBook(title, author) {
  obj.thisOneActuallyAddsTheBook(title, author);
  showBooks();
}

Declarations.addBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(Declarations.bookTitle.value, Declarations.bookAuthor.value);
});

window.onload = showBooks();

/* eslint-enable no-unused-vars */