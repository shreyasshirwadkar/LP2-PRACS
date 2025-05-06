const products = [
  {
    name: "Wireless Headphones",
    desc: "Noise-cancelling over-ear headphones.",
    price: 7999,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeoQ2TurVLi5bbrK3_vn6rg0Riztzg5089jSlLu1jNzqpfBE03MKxxNckOnho0Plw5BgN42B_EgKmEDC5V4Y7fPb1LgLn9d4tAxGkecY4JjA8k4btyMxr9kw",
    category: "Headphones",
  },
  {
    name: "Smartphone",
    desc: "Latest 5G Smartphone with stunning features.",
    price: 29999,
    img: "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Smartphone",
  },
  {
    name: "Smartphone",
    desc: "Latest 5G Smartphone with stunning features.",
    price: 29999,
    img: "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Smartphone",
  },
  {
    name: "Smartphone",
    desc: "Latest 5G Smartphone with stunning features.",
    price: 29999,
    img: "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UL480_FMwebp_QL65_.jpg",
    category: "Smartphone",
  },
  {
    name: "Headphone",
    desc: "Latest 5G Headphone with stunning features.",
    price: 29999,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeoQ2TurVLi5bbrK3_vn6rg0Riztzg5089jSlLu1jNzqpfBE03MKxxNckOnho0Plw5BgN42B_EgKmEDC5V4Y7fPb1LgLn9d4tAxGkecY4JjA8k4btyMxr9kw",
    category: "Headphones",
  },
  {
    name: "Headphone",
    desc: "Latest 5G Headphone with stunning features.",
    price: 29999,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeoQ2TurVLi5bbrK3_vn6rg0Riztzg5089jSlLu1jNzqpfBE03MKxxNckOnho0Plw5BgN42B_EgKmEDC5V4Y7fPb1LgLn9d4tAxGkecY4JjA8k4btyMxr9kw",
    category: "Headphones",
  },
];

const productGrid = document.getElementById("productGrid");
function renderProducts(filter = "All") {
  productGrid.innerHTML = "";
  products
    .filter((p) => filter === "All" || p.category === filter)
    .forEach((p) => {
      const card = `
        <div class="col">
          <div class="card h-100">
            <img src="${p.img}" class="card-img-top" alt="${p.name}">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">${p.desc}</p>
              <p class="card-text fw-bold text-success">₹${p.price}</p>
            </div>
          </div>
        </div>`;
      productGrid.innerHTML += card;
    });
}

// Initial load
renderProducts();

// Category filter
document.getElementById("categoryFilter").addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    const category = e.target.getAttribute("data-category");
    renderProducts(category);
  }
});
