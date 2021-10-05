let myLibrary = [];

function Book(title, author, nbrpages, read) {
    this.title = title;
    this.author = author;
    this.nbrpages = nbrpages;
    this.read = read;

    this.info = function() {
        return this.title + " " + this.author 
        + " " + this.nbrpages + " " + this.read;
    }
}

function getBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let nbrpages = document.getElementById("nbrpages").value;
    let read = document.getElementById("read").value;
    gottenBook = new Book(title, author, nbrpages, read);
    return gottenBook;
}

function bookNotInLibrary(book) {
    for (let i = 0; i < myLibrary.length; i++){
        libraryBook = myLibrary[i];
        if(libraryBook.info() === book.info()){
            return false;
        }
    }
    return true;
}

function addBookToLibrary() {
    bookToAdd = getBook();
    if (bookNotInLibrary(bookToAdd)){
        myLibrary.push(bookToAdd);
    }
    displayBooks();
    document.getElementById("form").style.display = "none";
    document.getElementById("submit").style.display = "none";
}

function showForm() {
    document.getElementById("form").style.display = "initial";
    document.getElementById("submit").style.display = "initial";
}

function deleteBook(bookNumber) {
    myLibrary[bookNumber] = null;
    console.log(myLibrary);
}

function createDeleteButton(bookNumber) {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete This Book";
    deleteButton.onclick = function () {
        deleteBook(bookNumber);
        displayBooks();
    };
    return deleteButton;
}

function changeReadStatus(bookNumber) {
    if (myLibrary[bookNumber].read == "Yes") {
        myLibrary[bookNumber].read = "No";
    } else {
        myLibrary[bookNumber].read = "Yes";
    }
}

function createReadToggleButton(bookNumber) {
    let readToggleButton = document.createElement("button");
    readToggleButton.innerHTML = "Change Read";
    readToggleButton.onclick = function () {
        changeReadStatus(bookNumber);
        displayBooks();
    }
    return readToggleButton;
}

function displayBooks() {
    books = document.getElementById("books");
    books.textContent = '';
    for(let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i] != null) {
            book = myLibrary[i];
            let div = document.createElement("div");
            div.className = "allbooks";
            let author = document.createTextNode(book.author);
            let title = document.createTextNode(book.title);
            let nbrpages = document.createTextNode(book.nbrpages);
            let read = document.createTextNode(book.read);
            div.appendChild(author);
            div.appendChild(title);
            div.appendChild(nbrpages);
            div.appendChild(read);
            div.appendChild(createDeleteButton(i));
            div.appendChild(createReadToggleButton(i));
            books.appendChild(div);
        }
    }
}