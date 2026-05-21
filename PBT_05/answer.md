## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 (5đ) — Viewport & Mobile-First

1. <meta name="viewport" content="width=device-width, initial-scale=1.0">

- name="viewport": Xác định rằng thẻ này dùng để kiểm soát cách trình duyệt hiển thị trang web trên các kích thước màn hình khác nhau.
- width=device-width: Thiết lập chiều rộng của trang web bằng với chiều rộng màn hình của thiết bị.
- initial-scale=1.0: Thiết lập mức phóng đại ban đầu khi trang web được tải (1.0 là tỷ lệ 1:1, không phóng to hay thu nhỏ).

2. Nếu thiếu thẻ này, iPhone (trình duyệt Safari trên iOS) sẽ mặc định hiển thị trang web với độ rộng giả lập là 980px (chiều rộng mặc định của trình duyệt desktop cũ). Kết quả là trang web sẽ bị thu nhỏ lại toàn bộ để vừa với màn hình nhỏ của iPhone, khiến văn bản và các nút bấm trở nên cực kỳ nhỏ, buộc người dùng phải dùng ngón tay để "zoom" vào mới có thể đọc được.

3.

<img src="/Users/hanguyen/Documents/PBT/PBT_05/screenshots/Screenshot 2026-05-21 at 15.39.00.png" width="300" alt="" >

- mobile-firts:  
   /_ Mặc định là di động (1 cột) _/
  .grid { display: grid; grid-template-columns: 1fr; }
  /_ Từ 768px trở lên (Desktop) _//_ Mặc định là di động (1 cột) _/
  .grid { display: grid; grid-template-columns: 1fr; }
  /_ Từ 768px trở lên (Desktop) _/
  @media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  }
- dektop-firts:
  /_ Mặc định là desktop (3 cột) _/
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); }
  /_ Dưới 768px (Mobile) _/
  @media (max-width: 767px) {
  .grid { grid-template-columns: 1fr; }
  }

  ```

  ```

**Tại sao Mobile-First được khuyên dùng?**

1.  **Hiệu suất:** Tệp CSS cho mobile nhẹ hơn, giúp trang web tải nhanh hơn trên mạng di động.
2.  **Tư duy tối giản:** Buộc lập trình viên tập trung vào nội dung cốt lõi quan trọng nhất trước khi thêm thắt các chi tiết trang trí cho màn hình lớn.
3.  **Khả năng mở rộng:** Việc thêm thuộc tính cho màn hình lớn (bằng `min-width`) thường dễ quản lý và ít ghi đè (override) hơn là cố gắng loại bỏ các tính năng phức tạp bằng `max-width`.

### Câu A2: Breakpoints

| Tên     | Kích thước (min-width) | Thiết bị         | Số cột lưới (Grid) |
| :------ | :--------------------- | :--------------- | :----------------- |
| **xs**  | 0px                    | Điện thoại       | 1 cột              |
| **sm**  | 576px                  | Điện thoại lớn   | 2 cột              |
| **md**  | 768px                  | Máy tính bảng    | 3 cột              |
| **lg**  | 992px                  | Laptop           | 4 cột              |
| **xl**  | 1200px                 | Màn hình lớn     | 4-6 cột            |
| **xxl** | 1400px                 | Màn hình cực lớn | 6 cột              |

### Câu A3 (5đ) — Media Queries

| Chiều rộng màn hình | .container width |
| :------------------ | :--------------- |
| 375px (iPhone SE)   | 100%             |
| 600px               | 540px            |
| 800px               | 720px            |
| 1000px              | 960px            |
| 1400px              | 1140px           |

### Câu A4 (5đ) — SCSS Basics

#### Bốn tính năng chính của SCSS

1. **Variables (Biến):** Cho phép lưu trữ giá trị (màu sắc, font chữ, kích thước) để tái sử dụng toàn bộ dự án.
   - Ví dụ: `$primary-color: #3498db; body { color: $primary-color; }`
2. **Nesting (Lồng nhau):** Cho phép viết các selector theo phân cấp giống cấu trúc HTML, giúp code gọn gàng và dễ đọc hơn.
   - Ví dụ: `nav { ul { list-style: none; } li { display: inline-block; } }`
3. **Mixins (@mixin, @include):** Tạo các nhóm thuộc tính CSS có thể tái sử dụng như các hàm, có thể truyền tham số.
   - Ví dụ: `@mixin flex-center { display: flex; justify-content: center; } .box { @include flex-center; }`
4. **@extend (Kế thừa):** Cho phép một selector kế thừa toàn bộ thuộc tính của một selector khác để tránh lặp lại code.
   - Ví dụ: `.button { padding: 10px; } .btn-primary { @extend .button; background: blue; }`

### 2. Tại sao trình duyệt KHÔNG đọc được file .scss?

- Trình duyệt chỉ hiểu các chuẩn CSS thuần (Standard CSS). Các tính năng của SCSS như biến, lồng nhau hay mixins không nằm trong đặc tả gốc của trình duyệt, nên nếu nhúng trực tiếp file `.scss` vào HTML, trình duyệt sẽ không thể xử lý và báo lỗi.

### 3. Các bước chuyển đổi (Biên dịch) từ SCSS sang CSS

1. **Cài đặt công cụ biên dịch:** Sử dụng Sass (Dart Sass) hoặc các công cụ như "Live Sass Compiler" trong VS Code.
2. **Biên dịch:** Công cụ sẽ đọc file `.scss` và chuyển đổi cú pháp SCSS sang các quy tắc CSS thuần túy.
3. **Output:** Kết quả tạo ra một file `.css` tiêu chuẩn.
4. **Sử dụng:** Nhúng file `.css` đã được biên dịch vào thẻ `<link>` trong file HTML của bạn.

### Bài B3 (20đ) — SCSS Refactor

- Lệnh compile SCSS sang CSS:

`sass scss/style.scss style.css`
