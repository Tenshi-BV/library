let myLibrary = [];

function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
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
    var title;
    var author;
    var pageCount;
    var status;
    title = prompt("What's the book title?");
    author = prompt("Who wrote it?");
    pageCount = prompt("How many pages does it have?");
    status = confirm("Have you read it?");
    if (title == null || author == null || pageCount == null) {
        alert("invalid input");
    } else {
        const thing = new Book(title, author, pageCount, status);
        addBookToLibrary(thing);
    }
}
 
// TEST BOOKS
const lotR = new Book("Lord of the Rings");
const donQuixote = new Book("Don Quixote");
addBookToLibrary(lotR);
addBookToLibrary(donQuixote);