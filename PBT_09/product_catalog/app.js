// Dữ liệu mẫu (12 SP - 4 Categories)
const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    price: 28990000,
    category: "phone",
    image:
      "[https://placehold.co/200?text=iPhone](https://placehold.co/200?text=iPhone)",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: "Samsung S24 Ultra",
    price: 31990000,
    category: "phone",
    image:
      "[https://placehold.co/200?text=Samsung](https://placehold.co/200?text=Samsung)",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 3,
    name: "Xiaomi 14",
    price: 19990000,
    category: "phone",
    image:
      "[https://placehold.co/200?text=Xiaomi](https://placehold.co/200?text=Xiaomi)",
    rating: 4.5,
    inStock: false,
  },
  {
    id: 4,
    name: "MacBook Air M3",
    price: 27990000,
    category: "laptop",
    image:
      "[https://placehold.co/200?text=MacBook](https://placehold.co/200?text=MacBook)",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 5,
    name: "Dell XPS 13",
    price: 35990000,
    category: "laptop",
    image:
      "[https://placehold.co/200?text=Dell](https://placehold.co/200?text=Dell)",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 6,
    name: "ThinkPad T14",
    price: 25990000,
    category: "laptop",
    image:
      "[https://placehold.co/200?text=ThinkPad](https://placehold.co/200?text=ThinkPad)",
    rating: 4.4,
    inStock: true,
  },
  {
    id: 7,
    name: "iPad Pro M4",
    price: 29990000,
    category: "tablet",
    image:
      "[https://placehold.co/200?text=iPad](https://placehold.co/200?text=iPad)",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 8,
    name: "Galaxy Tab S9",
    price: 19990000,
    category: "tablet",
    image:
      "[https://placehold.co/200?text=GalaxyTab](https://placehold.co/200?text=GalaxyTab)",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 9,
    name: "Lenovo Tab P11",
    price: 6990000,
    category: "tablet",
    image:
      "[https://placehold.co/200?text=LenovoTab](https://placehold.co/200?text=LenovoTab)",
    rating: 4.2,
    inStock: false,
  },
  {
    id: 10,
    name: "AirPods Pro 2",
    price: 5990000,
    category: "accessory",
    image:
      "[https://placehold.co/200?text=AirPods](https://placehold.co/200?text=AirPods)",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 11,
    name: "Sony WH-1000XM5",
    price: 7990000,
    category: "accessory",
    image:
      "[https://placehold.co/200?text=Sony](https://placehold.co/200?text=Sony)",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 12,
    name: "Logitech MX Master 3",
    price: 2490000,
    category: "accessory",
    image:
      "[https://placehold.co/200?text=Mouse](https://placehold.co/200?text=Mouse)",
    rating: 4.9,
    inStock: true,
  },
];

// DOM Elements
const productList = document.getElementById("productList");
const categoryNav = document.getElementById("categoryNav");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const themeToggle = document.getElementById("themeToggle");
const cartBadge = document.getElementById("cartBadge");
const modalContainer = document.getElementById("modalContainer");

let currentList = [...products];
let cartCount = 0;

// 1. Render Products (Tạo DOM Element thủ công)
const renderProducts = (list) => {
  productList.textContent = ""; // Clear DOM

  if (list.length === 0) {
    productList.innerHTML = `<h3>Không tìm thấy sản phẩm!</h3>`;
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = p.image;

    const name = document.createElement("h3");
    name.textContent = p.name;
    name.style.margin = "10px 0";

    const price = document.createElement("p");
    price.textContent = p.price.toLocaleString("vi-VN") + "đ";
    price.style.color = "#ff4757";
    price.style.fontWeight = "bold";

    const addBtn = document.createElement("button");
    addBtn.className = "add-btn";
    addBtn.textContent = "Thêm giỏ hàng";
    addBtn.disabled = !p.inStock;
    if (!p.inStock) addBtn.style.background = "#ccc";

    // Event Thêm Giỏ Hàng
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Ngăn không cho click lan ra thẻ card
      cartCount++;
      cartBadge.textContent = cartCount;
    });

    // Event mở Modal
    card.addEventListener("click", () => showModal(p));

    card.append(img, name, price, addBtn);
    productList.appendChild(card);
  });
};

// 2. Render Categories Nav
const renderCategories = () => {
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = `cat-btn ${cat === "all" ? "active" : ""}`;
    btn.textContent = cat.toUpperCase();

    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".cat-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      filterByCategory(cat);
    });

    categoryNav.appendChild(btn);
  });
};

// 3. Filter Category
const filterByCategory = (cat) => {
  currentList =
    cat === "all" ? [...products] : products.filter((p) => p.category === cat);
  searchProducts(searchInput.value); // Giữ nguyên search/sort đang có
};

// 4. Search Realtime
const searchProducts = (keyword) => {
  const key = keyword.toLowerCase();
  const result = currentList.filter((p) => p.name.toLowerCase().includes(key));
  applySort(result);
};
searchInput.addEventListener("input", (e) => searchProducts(e.target.value));

// 5. Sort
const applySort = (list) => {
  const sortType = sortSelect.value;
  let sortedList = [...list];

  if (sortType === "priceAsc") sortedList.sort((a, b) => a.price - b.price);
  if (sortType === "priceDesc") sortedList.sort((a, b) => b.price - a.price);
  if (sortType === "nameAsc")
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
  if (sortType === "ratingDesc") sortedList.sort((a, b) => b.rating - a.rating);

  renderProducts(sortedList);
};
sortSelect.addEventListener("change", () => applySort(currentList));

// 6. Modal Details
const showModal = (p) => {
  modalContainer.textContent = "";
  modalContainer.className = "modal-overlay";

  const content = document.createElement("div");
  content.className = "modal-content";

  const closeBtn = document.createElement("button");
  closeBtn.className = "close-modal";
  closeBtn.textContent = "X";
  closeBtn.addEventListener(
    "click",
    () => (modalContainer.className = "modal-hidden"),
  );

  const img = document.createElement("img");
  img.src = p.image;
  img.style.width = "100%";

  const info = document.createElement("div");
  info.innerHTML = `
        <h2 style="margin:10px 0">${p.name}</h2>
        <p><strong>Giá:</strong> ${p.price.toLocaleString("vi-VN")}đ</p>
        <p><strong>Đánh giá:</strong> ${p.rating} ⭐</p>
        <p><strong>Tình trạng:</strong> ${p.inStock ? '<span style="color:green">Còn hàng</span>' : '<span style="color:red">Hết hàng</span>'}</p>
    `;

  content.append(closeBtn, img, info);
  modalContainer.appendChild(content);

  // Đóng khi click ra ngoài overlay
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) modalContainer.className = "modal-hidden";
  });
};

// 7. Dark Mode Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Init App
renderCategories();
renderProducts(currentList);
