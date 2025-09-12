// === Template-Funktionen ===
function getBookTemplate(bookIndex) {
  //   Einfache if/else Lösung für das Like Icon
  let likeIcon = "";
  if (books[bookIndex].liked == true) {
    likeIcon = "assets/icons/heart-filled.png";
  } else {
    likeIcon = "assets/icons/heart-empty.png";
  }

  let insertComments = "";
  if (books[bookIndex].comments.length > 0) {
    for (
      let commentIndex = 0;
      commentIndex < books[bookIndex].comments.length;
      commentIndex++
    ) {
      insertComments += `<div class="new-comment">
                          <strong>Paul:</strong> "${books[bookIndex].comments[commentIndex].comment}"
                          </div>
                        `;
    }
  }

  return `<div class="book-card">
            
            <div class="book-info-box">
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
            </div>
            
            <div class="book-interactions">
              <div class="book-interactions-info">
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
              </div>
              <div class="comment-container">
                  
                  <article>
                    <div id="comment-container" class="comment-box">
                      <input id="comment${bookIndex}" type="text" class="comment-input" placeholder="Schreib einen Kommentar...">
                      <button onclick="addComment(${bookIndex}) ">
                        <div class="comment-button-info">
                        <img src="assets/icons/send-icon.png"
                            class="send-icon"
                        />
                        Kommentar posten
                        </div>
                      </button>
                    </div>

                    <div class="comments-List">
                    ${insertComments}
                    </div>
                  </article>
              </div>
            </div>
          </div>
        `;
}
