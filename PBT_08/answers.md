## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 (5đ) — Function Declaration vs Expression vs Arrow

**1. Viết 3 cách khởi tạo hàm:**

```javascript
// 1. Function Declaration
function tinhThueBaoHiem1(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thue, thuc_nhan: luong - thue };
}

// 2. Function Expression
const tinhThueBaoHiem2 = function (luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thue, thuc_nhan: luong - thue };
};

// 3. Arrow Function
const tinhThueBaoHiem3 = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return { thue, thuc_nhan: luong - thue };
};
```

2. Khác biệt về Hoisting:

- Function Declaration: Được hoisted (kéo lên đầu scope) TOÀN BỘ. Có thể gọi hàm trước khi khai báo.
- Function Expression & Arrow Function (dùng const/let): Chỉ hoisted phần khai báo biến, nhưng nằm trong vùng chết tạm thời (TDZ). Gọi trước khi khởi tạo sẽ báo lỗi ReferenceError.
- Ví dụ:
  console.log(funcDecl(12000000)); // Chạy bình thường
  function funcDecl(luong) { return luong; }

console.log(funcArrow(12000000)); // Lỗi: ReferenceError: Cannot access 'funcArrow' before initialization
const funcArrow = (luong) => luong;

### Câu A2

- Đoạn 1:
  console.log(c.increment()); // 1
  console.log(c.increment()); // 2
  console.log(c.increment()); // 3
  console.log(c.decrement()); // 2
  console.log(c.getCount()); // 2

- Đoạn 2:

// Output sau 100ms:
// var: 3
// var: 3
// var: 3

// Output sau 200ms:
// let: 0
// let: 1
// let: 2

- Giải thích:
  var có function scope (phạm vi hàm). Vòng lặp chạy xong rất nhanh, i đạt giá trị 3 trước khi setTimeout kịp thực thi. Cả 3 callback đều tham chiếu chung đến một biến i duy nhất có giá trị cuối cùng là 3.
  let có block scope (phạm vi khối). Tại mỗi vòng lặp, let tạo ra một phạm vi bộ nhớ (binding) hoàn toàn mới và đóng gói giá trị j hiện tại vào closure của setTimeout đó

### Câu A3

// 1. Lấy các số chẵn
nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
nums.map(n => n \* 3);

// 3. Tính tổng tất cả
nums.reduce((sum, n) => sum + n, 0);

// 4. Tìm số đầu tiên > 7
nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);

// 8. Đảo ngược mảng (không mutate gốc)
[...nums].reverse(); // hoặc nums.toReversed() (ES2023)

### Câu A4

// Destructuring
console.log(name, price, ram, color); // "iPhone 16" 25990000 8 "Titan"
console.log(specs); // ReferenceError: specs is not defined (Vì 'specs' chỉ được dùng làm đường dẫn phân rã bên trong, không khởi tạo thành biến)

// Spread
console.log(updated.price); // 23990000
console.log(updated.sale); // true
console.log(product.price); // 25990000 (Không đổi)

// Spread gotcha
console.log(product.specs.ram); // 16

- Tại sao product.specs.ram ra 16? Toán tử Spread ... chỉ thực hiện sao chép nông (shallow copy) ở tầng đầu tiên. Object con specs vẫn được truyền dưới dạng tham chiếu (reference) dùng chung bộ nhớ với object gốc product. Thay đổi ở bản copy sẽ làm thay đổi cả bản gốc.
