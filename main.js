let myLibrary = [];

const shelf = document.querySelector("#shelf")

function Book(name, author, pages, status) {
    this.name = name
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    const del = document.querySelectorAll("#shelf>div");
    del.forEach((div) => {shelf.removeChild(div);
    });
    var titles = myLibrary.map(book => `${book.name}`);
    var divs = titles.filter(book => createDiv(book));
    titles.length = 0;
}

function createDiv(book) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${book}</p><button class='delete'>✕</button>`;
    shelf.appendChild(div);   
}

const lotr = new Book("Lord of the Rings", "JRR Tolkien", 1200, true);
const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 2800, false);
addBookToLibrary(lotr);
addBookToLibrary(donQuixote);

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
        displayLibrary();
    }
}