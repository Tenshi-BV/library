let myLibrary = [];

function Book(name, author, pages, status) {
    this.name = name
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const lotr = new Book("Lord of the Rings", "JRR Tolkien", 1200, true);
const donQuixote = new new Book("Don Quixote", "Miguel de Cervantes", 2800, false);

/*

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

*/