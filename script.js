// === Initial FUNKTION ===
function init() {
  renderBooks();
}

// === RENDER FUNKTION ===
function renderBooks() {
  let bookListRef = document.getElementById("book_container");
  bookListRef.innerHTML = "";

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    bookListRef.innerHTML += getBookTemplate(bookIndex);
  }
}

// === LIKE FUNKTION ===
function toggleLike(bookIndex) {
  // Like-Status umschalten
  books[bookIndex].liked = !books[bookIndex].liked; //Das ! bedeutet "das Gegenteil von"

  // Likes-Anzahl anpassen
  if (books[bookIndex].liked) {
    books[bookIndex].likes = books[bookIndex].likes + 1;
  } else {
    books[bookIndex].likes = books[bookIndex].likes - 1;
  }

  // Seite neu rendern damit die Änderungen sichtbar werden
  renderBooks();
}

function addComment(bookIndex) {
  let commentInputRef = document.getElementById("comment" + bookIndex);
  let commentInput= commentInputRef.value;

  if (commentInput.length > 0) {
    books[bookIndex].comments.push({'comments': commentInput});
  }

  renderBooks();
}
