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

**Bài 1**

1. DNS Lookup: Trình duyệt gửi yêu cầu đến DNS Server để tìm địa chỉ IP tương ứng với tên miền `shopee.vn`.
2. Thiết lập kết nối: Sau khi có IP, trình duyệt thiết lập kết nối TCP với server. Vì đây là giao thức HTTPS, một quá trình bắt tay TLS/SSL cũng diễn ra để đảm bảo kết nối được mã hóa an toàn.
3. Gửi HTTP Request: Trình duyệt gửi một HTTP Request (phương thức GET) đến server của Shopee để yêu cầu nội dung trang web.
4. Server phản hồi: Server nhận yêu cầu, xử lý và gửi trả lại một HTTP Response bao gồm mã trạng thái (Status Code: 200 OK) và nội dung của file HTML.
5. Render (Trình bày trang web): Trình duyệt phân tích file HTML, tiếp tục tải các tài nguyên phụ (CSS, JavaScript, hình ảnh) để hiển thị giao diện hoàn chỉnh lên màn hình.

**Bài 2**

<img src="images/screenshotBai1.png" width="400">

### Câu A2 (5đ) — Semantic HTML

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

## PHẦN B — THỰC HÀNH CODE (60 điểm)

### Bài B3 (15đ) — Debug HTML

### Giải bài tập Debug HTML

1. Lỗi 1: Dòng 1 — Khai báo `<!DOCTYPE>` không đầy đủ — Cách sửa: Sửa thành `<!DOCTYPE html>`.
2. Lỗi 2: Dòng 1 — Thẻ `<title>` thiếu thẻ đóng — Cách sửa: Thêm `</title>` sau chữ "Trang web".
3. Lỗi 3: Dòng 2 — `charset="utf8"` chưa chuẩn — Cách sửa: Sửa thành `charset="UTF-8"`.
4. Lỗi 4: Dòng 4 — Thẻ đóng `<h1>` viết thiếu dấu `/` — Cách sửa: Thêm `</h1>`.
5. Lỗi 5: Dòng 8 — Thẻ đóng `<a>` bị viết nhầm thành thẻ mở — Cách sửa: Sửa thành `</a>`.
6. Lỗi 6: Dòng 16 — Thuộc tính `src` thiếu dấu ngoặc kép — Cách sửa: Sửa thành `src="iphone.jpg"`.
7. Lỗi 7: Dòng 16 — Thẻ `<img>` thiếu thuộc tính `alt` — Cách sửa: Thêm `alt="iPhone 16 Pro"`.
8. Lỗi 8: Dòng 18 — Các thẻ lồng nhau sai thứ tự đóng p trước b — Cách sửa: Đóng `</b>` trước rồi mới đóng `</p>`.
9. Lỗi 9: Dòng 34 — Sử dụng thẻ `<main>` thứ hai trong một trang — Cách sửa: Đổi thành thẻ `<aside>`.
10. Lỗi 10: Dòng 38 — Thẻ `<p>` trong footer thiếu thẻ đóng — Cách sửa: Thêm `</p>` ở cuối nội dung.

## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Thiết kế cấu trúc

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi tiết sản phẩm</title>
</head>
<body>

    <header>
        <nav>
            </nav>
    </header>

    <nav aria-label="breadcrumb">
            <!-- nav vì đây là điều hướng -->
        <ol> <!-- ol do breadcrumb cần điều hướng -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <main>

        <article> <!-- dùng article để bao hàm toàn bộ nôi dung và bên trong em sẽ dùng các section cho các khu vực để mô tả chi tiến thông tin như ảnh, tên sản phẩm,....-->

            <section>
                <figure>
                    <img src="#" alt="Ảnh 1">
                    <img src="#" alt="Ảnh 2">
                    <img src="#" alt="Ảnh 3">
                    <img src="#" alt="Ảnh 4">
                    <img src="#" alt="Ảnh 5">
                </figure>
            </section>

            <section>
                <h1>Tên sản phẩm</h1>

                <p>Giá sản phẩm</p>

                <div class="rating">
                    </div>

                <article>
                    <h2>Mô tả sản phẩm</h2>
                    <p>Đoạn văn mô tả chi tiết...</p>
                </article>
            </section>

            <section>
                <h2>Thông số kỹ thuật</h2>
                <table>
                    <tr>
                        <th>Màn hình</th>
                        <td>6.1 inch</td>
                    </tr>
                </table>
            </section>

            <section>
                <h2>Đánh giá từ khách hàng</h2>
                <article>
                    <p>Nội dung đánh giá</p>
                </article>
            </section>

        </article>

        <aside>    <!-- em dùng aside để chỉ thêm các thông tin bên lề khác với nội dung chính bên trên article -->
            <h2>Sản phẩm tương tự</h2>
            <ul>
                <li><a href="#">Sản phẩm A</a></li>
                <li><a href="#">Sản phẩm B</a></li>
            </ul>
        </aside>

    </main>

    <footer>     <!-- chân trang để bản quyền -->
        <p>Copyright 2026</p>
    </footer>

</body>
</html>

### Câu C2 (10đ) — So sánh & Tranh luận

### Phản biện: Tại sao không nên lạm dụng Div?

Thực ra, tư duy "dùng `<div>` cho mọi thứ rồi đắp class" nghe thì có vẻ nhanh và tiện, nhưng về lâu dài thì đây lại là cách làm cực kỳ thiếu chuyên nghiệp và gây khó cho chính mình. Theo mình, có hai lý do kỹ thuật quan trọng mà chúng ta bắt buộc phải dùng Semantic HTML:

- **Về SEO (Tối ưu hóa tìm kiếm):** Google Bot không đọc hiểu được tên class mà bạn tự đặt. Nó dựa vào các thẻ như `<main>`, `<nav>`, hay `<article>` để biết đâu là nội dung chính, đâu là mục lục. Nếu trang web của bạn chỉ toàn `<div>`, nó chẳng khác gì một cuốn sách không có tiêu đề chương, khiến công cụ tìm kiếm rất khó để xếp hạng web của bạn lên top.
- **Về Accessibility (Khả năng tiếp cận):** Đây là yếu tố cực kỳ quan trọng nhưng hay bị bỏ qua. Những người khiếm thị sử dụng trình đọc màn hình (Screen Reader) để duyệt web. Trình đọc sẽ thông báo "Đây là thanh điều hướng" khi gặp thẻ `<nav>`. Nếu bạn chỉ dùng `<div>`, người dùng sẽ hoàn toàn "lạc lối" vì không có các cột mốc ngữ nghĩa để định vị.

**Ví dụ thực tế nhất:** Hãy so sánh thẻ `<button>` và một cái `<div class="btn">`. Với `<button>` chuẩn, người dùng mặc định có thể dùng phím Tab để chọn hoặc phím Enter để nhấn. Nếu dùng `div`, bạn sẽ phải tốn thêm cả đống thời gian để viết Javascript cho những tính năng vốn đã có sẵn.

Tất nhiên, **`<div>` không xấu**, nó vẫn cực kỳ cần thiết trong trường hợp chúng ta cần một cái "hộp" thuần túy để phục vụ mục đích **trang trí hoặc bố cục (styling/layout)**. Chẳng hạn như dùng `<div>` làm wrapper để căn giữa nội dung bằng Flexbox hay tạo các lớp bọc để xử lý hiệu ứng CSS phức tạp. Những lúc đó, `div` là lựa chọn số một vì nó không mang ý nghĩa về nội dung.

Tóm lại, viết code chạy được thì dễ, nhưng viết code đẹp và chuẩn thì bắt buộc phải dùng Semantic HTML.
