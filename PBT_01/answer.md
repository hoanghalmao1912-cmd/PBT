# 📋 PHIẾU BÀI TẬP 01

# **HTML5 FUNDAMENTALS — Cấu trúc, Semantic, Tables & Links**

> **Tài liệu tham chiếu:** `tuan_1_html5/01_introduction_html_universe.md` → `05_tables_hyperlinks.md`
>
> ⏱️ **Thời gian:** 120 phút | 📊 **Tổng điểm:** 100

---

## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

> ⚠️ **YÊU CẦU:** Trả lời vào file `answers.md`. Mỗi câu phải ghi rõ **nguồn tham chiếu** (tên file + phần nào trong tài liệu).

### Câu A1 (5đ) — HTTP & Browser

Tài liệu tham chiếu (`01_introduction_html_universe.md`) Phần 1: Web hoạt động như thế nào?

1. DNS Lookup: Trình duyệt gửi yêu cầu đến DNS Server để tìm địa chỉ IP tương ứng với tên miền `shopee.vn`.
2. Thiết lập kết nối: Sau khi có IP, trình duyệt thiết lập kết nối TCP với server. Vì đây là giao thức HTTPS, một quá trình bắt tay TLS/SSL cũng diễn ra để đảm bảo kết nối được mã hóa an toàn.
3. Gửi HTTP Request: Trình duyệt gửi một HTTP Request (phương thức GET) đến server của Shopee để yêu cầu nội dung trang web.
4. Server phản hồi: Server nhận yêu cầu, xử lý và gửi trả lại một HTTP Response bao gồm mã trạng thái (Status Code: 200 OK) và nội dung của file HTML.
5. Render (Trình bày trang web): Trình duyệt phân tích file HTML, tiếp tục tải các tài nguyên phụ (CSS, JavaScript, hình ảnh) để hiển thị giao diện hoàn chỉnh lên màn hình.

### Câu A2 (5đ) — Semantic HTML

Đọc chương 04, trả lời: Tại sao trang web dưới đây bị Google đánh giá SEO thấp? Liệt kê **ít nhất 4 lỗi semantic** và sửa lại.

```html
<div class="header">
  <div class="logo">ShopTLU</div>
  <div class="menu">
    <div><a href="/">Trang chủ</a></div>
    <div><a href="/products">Sản phẩm</a></div>
  </div>
</div>
<div class="main">
  <div class="product">
    <div class="title">iPhone 16 Pro</div>
    <div class="price">25.990.000đ</div>
    <div class="image"><img src="iphone.jpg" /></div>
  </div>
</div>
<div class="footer">© 2026 ShopTLU</div>
```

**4 lỗi cơ bản**
Tài liệu : Phần **04_visible_part_html.md** tại sao không nên dùng thẻ div cho mọi thứ ?

1.  Sử dụng `div` thay cho các thành phần cấu trúc: phải dùng các thẻ `<header>`, `<main>`, `<footer>` để xác định rõ vai trò của từng vùng
2.  Menu điều hướng không chuẩn: Thẻ `<div class="menu">` nên được thay bằng thẻ `<nav>` kết hợp với danh sách `<ul>`/`<li>` để nhận diện đây là tập hợp các đường liên kết chính của trang
3.  Tiêu đề sản phẩm không có cấp bậc: `<div class="title">` không cung cấp thông tin về độ quan trọng của nội dung. Nên thay bằng thẻ tiêu đề như `<h1>` hoặc `<h2>`
4.  Thiếu thuộc tính `alt` trong thẻ `img`: Nếu vì lý do gì đó mà ảnh không load được (ví dụ link lỗi), trình duyệt sẽ hiển thị nội dung trong thẻ alt lên đúng vị trí đó để người dùng vẫn biết chỗ đó đáng lẽ là cái gì

**Sửa lại**

<header class="header">
  <div class="logo">ShopTLU</div>
  <nav class="menu">
    <div><a href="/">Trang chủ</a></div>
    <div><a href="/products">Sản phẩm</a></div>
  </nav>
</header>

<main class="main">
  <section class="product">
    <h2 class="title">iPhone 16 Pro</h2>
    <p class="price">25.990.000đ</p>
    <div class="image">
      <img src="iphone.jpg" alt="Điện thoại iPhone 16 Pro" />
    </div>
  </section>
</main>

<footer class="footer">© 2026 ShopTLU</footer>

### Câu A3 (5đ) — Block vs Inline

Không chạy code, hãy **vẽ tay** (hoặc mô tả bằng text art) kết quả hiển thị của đoạn HTML sau. Giải thích tại sao.

```html
<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>
```

**ảnh vẽ tay**
![Kết quả ảnh bài 3](imagesBai3.png)
**Giải thích**

1. Thẻ block ví dụ như div luôn bắt đầu ở một dòng mới và chiếm trọn 100% chiều ngang của hàng đó
2. Thẻ inline ví dụ như strong, span chỉ chiếm vừa đủ không gian của nội dung bên trong nó. Nó không tự xuống dòng và cho phép các thẻ cũng là thẻ Inline nằm ngay bên cạnh

### Câu A4 (5đ) — Table

Đọc chương 05. Giải thích sự khác nhau giữa `<thead>`, `<tbody>`, `<tfoot>`. Tại sao KHÔNG NÊN dùng table để tạo layout trang web? (Ghi rõ ít nhất 3 lý do)
**Giải thích**

1. `<thead>` (Table Head):\*\* Dùng để chứa phần đầu của bảng, thường là các tiêu đề cột
2. `<tbody>` (Table Body):\*\* Đây là phần quan trọng nhất, chứa toàn bộ dữ liệu chính của bảng
3. `<tfoot>` (Table Footer):\*\* Dùng để chứa phần tổng kết hoặc ghi chú ở cuối bảng

**Lý do**

1. Sai ý nghĩa Semantics: Table chỉ dùng cho dữ liệu, dùng làm layout sẽ làm các công cụ tìm kiếm (SEO) và trình đọc màn hình không hiểu được cấu trúc trang.
2. Khó làm Responsive: Bảng không linh hoạt trên thiết bị di động, rất khó để các thành phần tự động xuống dòng trên màn hình nhỏ
3. Tải trang chậm: Trình duyệt phải xử lý xong toàn bộ bảng mới hiển thị

---
