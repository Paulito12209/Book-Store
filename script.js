
// === Initial FUNKTION ===
function init() {
  renderBooks();
}

let bookImagesIndex = 0;
let bookIndex = 0;

// === RENDER FUNKTIONEN ===
function renderBooks() {
  let bookListRef = document.getElementById("book_container");
  bookListRef.innerHTML = "";

  for (let bookImagesIndex = 0; bookImagesIndex < bookImages.length; bookImagesIndex++) {
    bookListRef.innerHTML += getBookTemplate(bookImagesIndex);
  }
}

function renderInfos(){

}
