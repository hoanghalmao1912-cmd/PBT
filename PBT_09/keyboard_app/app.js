// Data
const images = Array.from(
  { length: 9 },
  (_, i) => `https://placehold.co/600x400?text=Image+${i + 1}`,
);
const commands = [
  {
    id: "theme",
    name: "Đổi giao diện (Dark/Light)",
    action: () =>
      (document.body.style.filter = document.body.style.filter
        ? ""
        : "invert(1)"),
  },
  {
    id: "alert",
    name: "Hiển thị thông báo",
    action: () => alert("Lệnh đã được thực thi!"),
  },
  { id: "reload", name: "Tải lại trang", action: () => location.reload() },
];

// DOM
const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const status = document.getElementById("status");
const cmdPalette = document.getElementById("cmdPalette");
const cmdInput = document.getElementById("cmdInput");
const cmdList = document.getElementById("cmdList");

// State
let currentIndex = 0;
let isModalOpen = false;
let isCmdOpen = false;
let slideshowInterval = null;

// 1. Init Gallery
images.forEach((src, i) => {
  const btn = document.createElement("button");
  btn.className = "thumb-btn";
  btn.setAttribute("aria-label", `Xem ảnh ${i + 1}`);
  btn.innerHTML = `<img src="${src}" alt="Thumbnail ${i + 1}">`;
  btn.addEventListener("click", () => openModal(i));
  gallery.appendChild(btn);
});

// 2. Modal Logic
const openModal = (index) => {
  currentIndex = index;
  modalImg.src = images[currentIndex];
  imageModal.classList.remove("hidden");
  isModalOpen = true;
  document.getElementById("closeModal").focus(); // Focus management
};

const closeModal = () => {
  imageModal.classList.add("hidden");
  isModalOpen = false;
  stopSlideshow();
  gallery.children[currentIndex].focus(); // Trả focus về ảnh vừa xem
};

const changeImage = (dir) => {
  currentIndex = (currentIndex + dir + images.length) % images.length;
  modalImg.src = images[currentIndex];
};

const toggleSlideshow = () => {
  if (slideshowInterval) stopSlideshow();
  else {
    slideshowInterval = setInterval(() => changeImage(1), 1500);
    status.textContent = "Đang phát slideshow...";
  }
};

const stopSlideshow = () => {
  clearInterval(slideshowInterval);
  slideshowInterval = null;
  status.textContent = "Đang dừng slideshow";
};

document.getElementById("closeModal").addEventListener("click", closeModal);

// 3. Command Palette Logic
const togglePalette = () => {
  isCmdOpen = !isCmdOpen;
  if (isCmdOpen) {
    cmdPalette.classList.remove("hidden");
    cmdInput.value = "";
    renderCommands(commands);
    cmdInput.focus();
  } else {
    cmdPalette.classList.add("hidden");
    document.body.focus();
  }
};

const renderCommands = (list) => {
  cmdList.innerHTML = list
    .map(
      (cmd, i) =>
        `<li class="cmd-item" role="option" tabindex="0" data-id="${cmd.id}">${cmd.name}</li>`,
    )
    .join("");

  // Delegation for command clicks
  cmdList.querySelectorAll(".cmd-item").forEach((item) => {
    item.addEventListener("click", () => executeCmd(item.dataset.id));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") executeCmd(item.dataset.id);
    });
  });
};

const executeCmd = (id) => {
  const cmd = commands.find((c) => c.id === id);
  if (cmd) cmd.action();
  togglePalette();
};

cmdInput.addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = commands.filter((c) =>
    c.name.toLowerCase().includes(keyword),
  );
  renderCommands(filtered);
});

// 4. Global Keyboard Navigation
document.addEventListener("keydown", (e) => {
  // Command Palette Trigger (Ctrl + K)
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    if (!isModalOpen) togglePalette();
    return;
  }

  // Escape để đóng mọi overlay
  if (e.key === "Escape") {
    if (isCmdOpen) togglePalette();
    if (isModalOpen) closeModal();
    return;
  }

  // Nếu Command Palette đang mở -> Enter để chọn lệnh đầu tiên (nếu đang ở input)
  if (isCmdOpen && e.key === "Enter" && document.activeElement === cmdInput) {
    const firstCmd = cmdList.querySelector(".cmd-item");
    if (firstCmd) executeCmd(firstCmd.dataset.id);
    return;
  }

  // Modal Shortcuts
  if (isModalOpen) {
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === " ") {
      e.preventDefault(); // Tránh scroll web
      toggleSlideshow();
    }
  }

  // Phím 1-9 nhảy ảnh (hoạt động cả khi mở/đóng modal)
  if (!isCmdOpen && e.key >= "1" && e.key <= "9") {
    const index = parseInt(e.key) - 1;
    if (index < images.length) openModal(index);
  }
});
