@ -1,5 +1,13 @@
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => {
      renderBooks(data);
    })
    .catch((error) => {
      console.log("Error fetching books:", error);
    });


}

@@ -9,9 +17,11 @@ function renderBooks(books) {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  })

}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
   


