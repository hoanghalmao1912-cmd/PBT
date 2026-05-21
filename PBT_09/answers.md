## PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)

### Câu A1 (5đ) — DOM Tree

**1. Sơ đồ cây DOM:**

```text
div#app
 ├── header
 │    ├── h1
 │    └── nav
 │         ├── a.active
 │         ├── a
 │         └── a
 └── main
      ├── form#todoForm
      │    ├── input#todoInput
      │    └── button
      └── ul#todoList
           ├── li.todo-item
           └── li.todo-item.completed
```

2. Các câu lệnh querySelector:
   - Chọn thẻ <h1: document.querySelector('h1')
   - Chọn input trong form: document.querySelector('#todoForm input')
   - Chọn tất cả .todo-item: document.querySelectorAll('.todo-item')
   - Chọn link đang active: document.querySelector('.active')
   - Chọn <li> đầu tiên trong #todoList: document.querySelector('#todoList li:first-child')
   - Chọn tất cả <a> bên trong <nav>: document.querySelectorAll('nav a')

### Câu A2 (5đ) — innerHTML vs textContent

### Câu A2 (5đ) — innerHTML vs textContent

- **innerHTML**: Biên dịch chuỗi thành các thẻ HTML thực sự. Dùng khi bạn muốn chèn cấu trúc HTML mới vào DOM.
- **`textContent`**: Chỉ xử lý chuỗi dưới dạng văn bản thô (plain text). Bỏ qua mọi thẻ HTML. Dùng khi chỉ muốn thay đổi chữ.

**Tại sao innerHTML gây lỗi XSS?**
Vì trình duyệt sẽ đọc đoạn mã độc (như thẻ `<img src=x onerror="alert('Hacked!')">` hoặc thẻ `<script>`) và thực thi nó ngay lập tức, cho phép hacker chạy mã JS trên trình duyệt của nạn nhân.

**Cách sửa lỗi bảo mật:**
Chuyển sang dùng `textContent` để biến mã độc thành văn bản bình thường vô hại:

```javascript
const userInput = document.querySelector("#search").value;
// SỬA THÀNH:
document.querySelector("#result").textContent = userInput;
```

### Câu A3 (5đ) — Event Bubbling

1. Khi click vào button (Mặc định):
   Sự kiện sủi bọt từ trong ra ngoài (Bubbling). Output:

```javascript
BUTTON;
INNER;
OUTER;
```

2. Nếu uncomment e.stopPropagation():
   Sự kiện bị chặn lại ngay tại button, không thể nổi bọt lên các phần tử cha. Output:

```javascript
BUTTON;
```
