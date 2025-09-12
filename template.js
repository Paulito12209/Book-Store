// === Template-Funktionen ===
function getBookTemplate(bookIndex) {
  //   Einfache if/else Lösung für das Like Icon
  let likeIcon = "";
  if (books[bookIndex].liked == true) {
    likeIcon = "assets/icons/heart-filled.png";
  } else {
    likeIcon = "assets/icons/heart-empty.png";
  }

  return `<div class="book-card">
            <div class="book-image-box">
              <img src="${books[bookIndex].image}"
              class="book-image"
              alt=""
              title=""
              />
              <!-- Like Button über dem Bild -->
              <div class="like-overlay">
                <img src="${likeIcon}"
                     class="like-button"
                     alt="Like Button"
                     title="Like Button"
                     onclick="toggleLike(${bookIndex})"
                />
              </div>
            </div>
            <div class="book-info-box">
              <div class="book-tags">
                <span>${books[bookIndex].category}</span>
              </div>
              <div class="book-info">
                <div class="book-title">
                  <h2>${books[bookIndex].title}</h2>
                </div>
                <div class="book-info-box-divider"></div>
                <span>von ${books[bookIndex].author}</span>
                <div class="book-publisher">
                  <span>${books[bookIndex].publisher}</span>
                </div>
                
                <p>${books[bookIndex].summary}</p>
              </div>
              <div class="book-info-box-divider"></div>
              <div class="book-interactions">
                <div class="book-likes">
                  <img src="assets/icons/heart-empty.png"
                       class="like-icon"
                       alt="Like Icon"
                       title="Like Icon"
                  />
                  <span>${books[bookIndex].likes} Likes</span>
                </div>
                <div class="book-comment">
                  <img src="assets/icons/comment-icon.png"
                       class="comment-icon"
                       alt="Commentary"
                       title="Commentary"
                  />
                  <span>Kommentare</span>
                </div>
                <div class="comment-box">
                </div>
              </div>
            </div>
          </div>
        `;
}
