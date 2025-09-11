// Template-Funktionen
function getBookTemplate(bookImagesIndex) {
  return `<div class="book-card">
            <div class="book-image-box">
              <img src="${bookImages[bookImagesIndex]}"
              class="book-image"
              alt=""
              title=""
              />
            </div>
            <div class="book-info-box">
              <div class="book-info">
                <h2>${books[bookIndex].title}</h2>
                <span>von ${books[bookIndex].author}</span>
                <p>${books[bookIndex].summary}</p>
              </div>
              <div class="book-labels">
                <div class="book-tags">
                    <span>${books[bookIndex].category}</span>
                </div>
                <div class="book-tags">
                    <span>${books[bookIndex].publisher}</span>
                </div>
              </div>
              <div class="book-info-box-divider"></div>
            </div>
          </div>
        `;
}
