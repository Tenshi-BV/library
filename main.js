let myLibrary = [];

function Book(name) {
    this.name = name;
}

function addBookToLibrary(name) {
    myLibrary.push(name);
}

function showTitles() {
    const mapTitles = myLibrary.map(book => book.name);
    const createBooks = mapTitles.map(title => createBook(title));
}

function createBook(book) {
    const shelf = document.querySelector("#shelf");
    const div = document.createElement('div');
    div.textContent = book;
    shelf.appendChild(div);
}

const createButton = document.querySelector("#newbook");
createButton.addEventListener('click', () => displayForm());

function displayForm() {
    var title = prompt("What's the book title?");
    var author = prompt("Who wrote it?");
    var pageCount = prompt("How many pages does it have?");
    var status = confirm("Have you read it?");
}

// TEST BOOKS
const lotR = new Book("Lord of the Rings");
const donQuixote = new Book("Don Quixote");
addBookToLibrary(lotR);
addBookToLibrary(donQuixote);