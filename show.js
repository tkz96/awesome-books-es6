/* eslint-disable no-unused-vars */
const bs = document.querySelector('.bookSection');
const fs = document.querySelector('.formSection');
const cs = document.querySelector('.contactSection');

function showBookSection() {
  bs.classList.add('active');
  fs.classList.remove('active');
  cs.classList.remove('active');
}

function showFormSection() {
  bs.classList.remove('active');
  fs.classList.add('active');
  cs.classList.remove('active');
}

function showContactSection() {
  bs.classList.remove('active');
  fs.classList.remove('active');
  cs.classList.add('active');
}