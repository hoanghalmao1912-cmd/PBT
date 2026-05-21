// DOM Elements
const form = document.getElementById("regForm");
const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  confirm: document.getElementById("confirm"),
  phone: document.getElementById("phone"),
};
const submitBtn = document.getElementById("submitBtn");

// State
const isValid = {
  name: false,
  email: false,
  password: false,
  confirm: false,
  phone: false,
};

// Kiểm tra tổng thể form
const checkForm = () => {
  submitBtn.disabled = !Object.values(isValid).every(Boolean);
};

// 1. Tên (2-50 ký tự)
inputs.name.addEventListener("input", (e) => {
  const val = e.target.value.trim();
  const icon = document.getElementById("nameIcon");
  isValid.name = val.length >= 2 && val.length <= 50;
  icon.textContent = val.length === 0 ? "" : isValid.name ? "✅" : "❌";
  checkForm();
});

// 2. Email
inputs.email.addEventListener("input", (e) => {
  const val = e.target.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const error = document.getElementById("emailError");
  isValid.email = regex.test(val);

  if (val.length === 0) error.textContent = "";
  else if (!isValid.email) error.textContent = "Email không đúng định dạng!";
  else error.textContent = "";
  checkForm();
});

// 3. Password Strength
inputs.password.addEventListener("input", (e) => {
  const val = e.target.value;
  const bar = document.getElementById("strengthBar");
  const text = document.getElementById("strengthText");

  let w = "0%",
    color = "",
    msg = "";
  const hasLetter = /[a-zA-Z]/.test(val);
  const hasNumber = /[0-9]/.test(val);
  const hasSpecial = /[^A-Za-z0-9]/.test(val);
  const hasUpper = /[A-Z]/.test(val);
  const hasLower = /[a-z]/.test(val);

  if (val.length > 0) {
    if (val.length < 8) {
      w = "33%";
      color = "#dc3545";
      msg = "Yếu";
      isValid.password = false; // Phải >= 8 ký tự mới hợp lệ
    } else if (hasUpper && hasLower && hasNumber && hasSpecial) {
      w = "100%";
      color = "#28a745";
      msg = "Mạnh";
      isValid.password = true;
    } else if (hasLetter && hasNumber) {
      w = "66%";
      color = "#ffc107";
      msg = "Trung bình";
      isValid.password = true;
    } else {
      w = "33%";
      color = "#dc3545";
      msg = "Yếu"; // >=8 nhưng chỉ có chữ hoặc chỉ có số
      isValid.password = false;
    }
  } else {
    isValid.password = false;
  }

  bar.style.width = w;
  bar.style.backgroundColor = color;
  text.textContent = msg;
  text.style.color = color;

  // Kích hoạt lại check confirm password
  inputs.confirm.dispatchEvent(new Event("input"));
  checkForm();
});

// 4. Confirm Password
inputs.confirm.addEventListener("input", (e) => {
  const val = e.target.value;
  const error = document.getElementById("confirmError");
  isValid.confirm = val === inputs.password.value && val.length > 0;

  if (val.length === 0) error.textContent = "";
  else if (!isValid.confirm) error.textContent = "Mật khẩu không khớp!";
  else error.textContent = "";
  checkForm();
});

// 5. Phone Format (0901-234-567)
inputs.phone.addEventListener("input", (e) => {
  let val = e.target.value.replace(/\D/g, ""); // Xóa chữ, giữ số
  let formatted = val;

  if (val.length > 4) formatted = val.slice(0, 4) + "-" + val.slice(4);
  if (val.length > 7)
    formatted =
      val.slice(0, 4) + "-" + val.slice(4, 7) + "-" + val.slice(7, 10);

  e.target.value = formatted;

  const icon = document.getElementById("phoneIcon");
  isValid.phone = val.length === 10;
  icon.textContent = val.length === 0 ? "" : isValid.phone ? "✅" : "❌";
  checkForm();
});

// Submit Form & Modal
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const modalInfo = document.getElementById("modalInfo");
  modalInfo.innerHTML = `
        <p><strong>Tên:</strong> ${inputs.name.value}</p>
        <p><strong>Email:</strong> ${inputs.email.value}</p>
        <p><strong>SĐT:</strong> ${inputs.phone.value}</p>
    `;

  document.getElementById("modal").className = "modal-overlay";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").className = "modal-hidden";
  form.reset();
  Object.keys(isValid).forEach((k) => (isValid[k] = false));
  document
    .querySelectorAll(".icon, .error-text, #strengthText")
    .forEach((el) => (el.textContent = ""));
  document.getElementById("strengthBar").style.width = "0";
  checkForm();
});
