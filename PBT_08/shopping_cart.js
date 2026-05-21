function createCart() {
  // Private data
  let items = [];
  let discountCode = null;

  return {
    // Thêm sản phẩm
    addItem(product, quantity = 1) {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        items.push({ ...product, quantity });
      }
    },

    // Xóa sản phẩm theo id
    removeItem(productId) {
      items = items.filter((item) => item.id !== productId);
    },

    // Cập nhật số lượng
    updateQuantity(productId, newQuantity) {
      const item = items.find((item) => item.id === productId);
      if (item) item.quantity = newQuantity;
    },

    // Tính tổng tiền
    getTotal() {
      let total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      if (discountCode === "SALE10") return total * 0.9;
      if (discountCode === "SALE20") return total * 0.8;
      if (discountCode === "FREESHIP") return Math.max(0, total - 30000);

      return total;
    },

    // Áp dụng mã giảm giá
    applyDiscount(code) {
      discountCode = code;
    },

    // In giỏ hàng dạng bảng
    printCart() {
      const f = (n) => n.toLocaleString("vi-VN");

      console.log(
        "┌─────────────────────────────────────────────────────────────┐",
      );
      console.log(
        "│ # │ Sản phẩm          │ SL │ Đơn giá        │ Tổng          │",
      );

      items.forEach((item, index) => {
        const stt = String(index + 1).padEnd(2);
        const name = item.name.padEnd(17);
        const sl = String(item.quantity).padStart(2);
        const price = f(item.price).padStart(14);
        const total = f(item.price * item.quantity).padStart(13);
        console.log(`│ ${stt}│ ${name} │ ${sl} │ ${price} │ ${total} │`);
      });

      console.log(
        "├─────────────────────────────────────────────────────────────┤",
      );
      console.log(
        `│ Tổng cộng:                           ${f(this.getTotal()).padStart(20)}đ │`,
      );
      console.log(
        "└─────────────────────────────────────────────────────────────┘",
      );
    },

    // Lấy tổng số sản phẩm
    getItemCount() {
      return items.reduce((sum, item) => sum + item.quantity, 0);
    },

    // Xóa toàn bộ giỏ
    clearCart() {
      items = [];
      discountCode = null;
    },
  };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2
