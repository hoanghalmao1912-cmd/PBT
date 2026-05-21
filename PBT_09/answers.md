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

**2. Các câu lệnh querySelector:**

```javascript
- Chọn thẻ h1: document.querySelector('h1')
- Chọn input trong form: document.querySelector('#todoForm input')
- Chọn tất cả .todo-item: document.querySelectorAll('.todo-item')
- Chọn link đang active: document.querySelector('.active')
- Chọn li đầu tiên trong #todoList: document.querySelector('#todoList li:first-child')
- Chọn tất cả a bên trong nav: document.querySelectorAll('nav a')
```

### Câu A2 (5đ) — innerHTML vs textContent

- **innerHTML**: Biên dịch chuỗi thành các thẻ HTML thực sự. Dùng khi bạn muốn chèn cấu trúc HTML mới vào DOM.
- **textContent**: Chỉ xử lý chuỗi dưới dạng văn bản thô (plain text). Bỏ qua mọi thẻ HTML. Dùng khi chỉ muốn thay đổi chữ.

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

**1. Khi click vào button (Mặc định):**
Sự kiện sủi bọt từ trong ra ngoài (Bubbling). Output:

```text
BUTTON
INNER
OUTER
```

**2. Nếu uncomment e.stopPropagation():**
Sự kiện bị chặn lại ngay tại button, không thể nổi bọt lên các phần tử cha. Output:

```text
BUTTON
```

---

## PHẦN C — DEBUG & PHÂN TÍCH (15 điểm)

### Câu C1 (8đ) — Debug DOM Code

**1. Liệt kê 7 lỗi và cách sửa:**

1. **Sai tên sự kiện (Event Name):** - _Lỗi:_ `addEventListener("onclick", ...)` ở nút `#decrementBtn`.
   - _Sửa:_ Đổi thành `"click"`.
2. **Gán giá trị sai cho Element (TypeError):** - _Lỗi:_ `countDisplay = count;` ở nút reset. `countDisplay` là hằng số (`const`) trỏ tới DOM Element, không thể gán lại bằng một số.
   - _Sửa:_ `countDisplay.textContent = count;`
3. **Lỗi gán `null` cho innerHTML:** - _Lỗi:_ `historyList.innerHTML = null;`. Trình duyệt sẽ ép kiểu thành chuỗi và in ra chữ "null" trên màn hình.
   - _Sửa:_ `historyList.innerHTML = "";`
4. **Gọi hàm sai cú pháp:** - _Lỗi:_ `item.remove;` ở nút clear history bị thiếu ngoặc đơn (đây là function).
   - _Sửa:_ `item.remove();`
5. **Sai kiểu dữ liệu khi lấy từ localStorage:** - _Lỗi:_ `count = localStorage.getItem("count");` sẽ trả về String hoặc `null`. Nếu là `null`, các phép toán sau này sẽ bị sai.
   - _Sửa:_ `count = parseInt(localStorage.getItem("count")) || 0;`
6. **Lưu lịch sử nhưng không load lại:** - _Lỗi:_ Hàm `load` không lấy lại data `history` đã lưu trong `beforeunload`.
   - _Sửa:_ Thêm `historyList.innerHTML = localStorage.getItem("history") || "";` vào hàm load.
7. **Mất Event Listener khi dùng innerHTML (Lỗi logic):** - _Lỗi:_ Nếu load lịch sử bằng `innerHTML`, các thẻ `<li>` cũ sẽ mất hoàn toàn sự kiện `click` để xóa (vì sự kiện không được lưu dưới dạng chuỗi HTML).
   - _Sửa:_ Dùng **Event Delegation**. Gắn duy nhất 1 sự kiện click lên `historyList` thay vì gắn lẻ tẻ cho từng `<li>`.

**2. Code sau khi Refactor hoàn chỉnh:**

```javascript
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

// Sử dụng Event Delegation cho việc xóa history
historyList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

document.querySelector("#incrementBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;

  const li = document.createElement("li");
  li.textContent = "Count changed to " + count;
  historyList.append(li);
});

// Sửa 1: "click" thay vì "onclick"
document.querySelector("#decrementBtn").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  count = 0;
  // Sửa 2 & 3:
  countDisplay.textContent = count;
  historyList.innerHTML = "";
});

document.querySelector("#clearHistory").addEventListener("click", () => {
  const items = historyList.querySelectorAll("li");
  // Sửa 4: Thêm ()
  items.forEach((item) => item.remove());
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("count", count);
  localStorage.setItem("history", historyList.innerHTML);
});

window.addEventListener("load", () => {
  // Sửa 5 & 6: ParseInt, fallback và khôi phục history
  count = parseInt(localStorage.getItem("count")) || 0;
  countDisplay.textContent = count;
  historyList.innerHTML = localStorage.getItem("history") || "";
});
```

### Câu C2 (7đ) — Performance

**1. Event Delegation:**

- **Tại sao Bad Practice:** Gắn sự kiện lên 1000 thẻ div sẽ tạo ra 1000 function riêng biệt trong bộ nhớ RAM (gây memory leak, giật lag). Đồng thời, nếu thêm một thẻ div thứ 1001 bằng JS sau đó, thẻ này sẽ KHÔNG có event listener.
- **Cách Event Delegation giải quyết:** Lợi dụng cơ chế Event Bubbling (Sủi bọt). Ta chỉ gắn 1 event listener duy nhất lên thẻ DOM cha. Khi click vào thẻ con, sự kiện sẽ sủi bọt lên cha. Ta dùng `e.target` để xác định chính xác phần tử con nào vừa bị click và xử lý.

**2. Refactor với DocumentFragment:**

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}

document.body.appendChild(fragment); // ← Chỉ 1 lần reflow!
```

**3. Giải thích tại sao nhanh hơn:**

- Trình duyệt tốn rất nhiều tài nguyên để tính toán lại layout và vẽ lại giao diện (Reflow & Repaint) mỗi khi DOM thực sự (live DOM) bị thay đổi. Code cũ chèn trực tiếp 1000 lần vào document.body, ép trình duyệt thực hiện 1000 lần reflow.
- `DocumentFragment` là một cấu trúc DOM ảo, tồn tại trong bộ nhớ chứ không nằm trên giao diện. Việc append 1000 div vào fragment không kích hoạt render. Chỉ khi nhét toàn bộ cục fragment đó vào body ở bước cuối cùng, trình duyệt mới vẽ lại đúng 1 lần duy nhất, giúp tăng hiệu suất tối đa.
