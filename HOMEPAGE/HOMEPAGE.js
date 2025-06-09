// search.js

const books = [
  {
    title: "Orang-Orang yang Dihapus Masuk Neraka",
    author: "Ahmad Khalil Jum'ah",
    image: "/IMG/BUKU1.png"
  },
  {
    title: "Belajar Pemrograman untuk Pemula",
    author: "Jubilee Enterprise",
    image: "/IMG/BUKU2.png"
  },
  {
    title: "Habis Gelap Terbitlah Terang",
    author: "R.A. Kartini",
    image: "/IMG/BUKU3.png"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.search-input');
  
  const searchResultContainer = document.createElement('div');
  searchResultContainer.classList.add('search-result');
  searchInput.closest('.hero').appendChild(searchResultContainer);

  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    searchResultContainer.innerHTML = '';

    if (keyword.length > 0) {
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword)
      );

      if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
          const bookDiv = document.createElement('div');
          bookDiv.className = 'search-book';
          bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}" />
            <p><strong>${book.title}</strong><br/><em>${book.author}</em></p>
          `;
          searchResultContainer.appendChild(bookDiv);
        });
      } else {
        searchResultContainer.innerHTML = `<p>Tidak ditemukan.</p>`;
      }
    }
    // Jika pencarian kosong, tetap tampilkan Buku Terpopuler
    else {
      searchResultContainer.innerHTML = '';
    }
  });
});
