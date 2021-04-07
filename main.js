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
    var divs = myLibrary.filter(book => createDiv(book));
}

function createDiv(book) {
    const div = document.createElement('div');
    div.setAttribute('data-index', findIndex(book));
    div.innerHTML = `<p class='title'>${book.name}<br>${book.author}</p><button class='delete'>✕</button><p>${book.pages} p.</p><p>${readibility(book.status)}</p><button class='read'>✓</button>`;
    shelf.appendChild(div);
    dOM(book);
    check(book);
}

function readibility(boolean) {
    let status;
    if (boolean) {
        status = "read";
    } else {
        status = "unread";
    }
    return status;
}

function findIndex(book) {
    const index = myLibrary.indexOf(book);
    return index;
}

const lotr = new Book("Lord of the Rings", "JRR Tolkien", 1200, true);
const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 2800, false);
addBookToLibrary(lotr);
addBookToLibrary(donQuixote);
displayLibrary();

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

function dOM(book) {
    index = findIndex(book);
    const obj = document.querySelector(`div[data-index="${index}"`);
    const del = obj.querySelector('.delete')
    del.addEventListener('click', () => {
        removeElement(book);
    });
}

function removeElement(book) {
    var element = findIndex(book);
    myLibrary.splice(element, 1);
    displayLibrary();
}

function check(book) {
    const obj = document.querySelector(`div[data-index="${index}"`);
    const read = obj.querySelector('.read')
    read.addEventListener('click', () => {
        tickElement(book);
    });
}

function tickElement(book) {
    if (book.status === true) {
        book.status = false;
    } else {
        book.status = true;
    }
    displayLibrary();
}