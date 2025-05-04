// Sample product data (add more products to test pagination)
const products = [
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Gaming Mouse",
    price: 2499,
    desc: "Ergonomic gaming mouse.",
    img: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
  },
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Gaming Mouse",
    price: 2499,
    desc: "Ergonomic gaming mouse.",
    img: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
  },
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Gaming Mouse",
    price: 2499,
    desc: "Ergonomic gaming mouse.",
    img: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
  },
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Wireless Headphones",
    price: 7999,
    desc: "Noise-cancelling over-ear headphones.",
    img: "https://m.media-amazon.com/images/I/318EgLiOMUL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    name: "Gaming Mouse",
    price: 2499,
    desc: "Ergonomic gaming mouse.",
    img: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
  },
];

// Pagination variables
let currentPage = 1;
const itemsPerPage = 4; // Change to 10 as needed
const totalPages = Math.ceil(products.length / itemsPerPage);

function renderTable() {
  const tableBody = document.getElementById("productTableBody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentProducts = products.slice(start, end);

  currentProducts.forEach((p) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td><img src=${p.img} alt = ${p.name}</td>
    <td> ${p.name}</td>
    <td> ${p.price}</td>
    <td> ${p.desc}</td>
    `;

    tableBody.appendChild(row);
  });

  renderPagination();
}

function renderPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = `
      <button onclick="changePage(-1)" ${
        currentPage === 1 ? "disabled" : ""
      }>Prev</button>
      Page ${currentPage} of ${totalPages}
      <button onclick="changePage(1)" ${
        currentPage === totalPages ? "disabled" : ""
      }>Next</button>
    `;
}

function changePage(direction) {
  currentPage += direction;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  renderTable();
}

// Call on initial load
window.onload = renderTable;
