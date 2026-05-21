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

## PHẦN C — PHÂN TÍCH (20 điểm)

### Câu C1 (10đ) — Phân tích trang web thực

<img src="/Users/hanguyen/Documents/PBT/PBT_05/screenshots/Screenshot 2026-05-21 at 16.15.21.png" width="500" alt="" >

<img src="/Users/hanguyen/Documents/PBT/PBT_05/screenshots/Screenshot 2026-05-21 at 16.15.45.png" width="500" alt="" >

<img src="/Users/hanguyen/Documents/PBT/PBT_05/screenshots/Screenshot 2026-05-21 at 16.15.57.png" width="500" alt="" >

2. Phân tích Responsive Design (Ví dụ thực tế: Tiki.vn)
   1. Navigation (Thanh điều hướng) thay đổi thế nào?
   - Desktop (1440px): Hiển thị thanh Header rất to. Có Logo đầy đủ, thanh tìm kiếm dài ở giữa, các nút chức năng (Trang chủ, Tài khoản, Giỏ hàng) hiển thị cả icon lẫn text. Bên trái có menu danh mục thả xuống (Dropdown).
   - Tablet (768px): Thanh tìm kiếm bị thu ngắn lại. Chữ (text) ở các nút chức năng bắt đầu bị ẩn đi, chỉ giữ lại Icon để tiết kiệm không gian.
   - Mobile (375px): Giao diện lột xác hoàn toàn. Header chỉ còn Logo nhỏ và thanh tìm kiếm tối giản. Thay đổi lớn nhất là xuất hiện Bottom Navigation Bar (thanh điều hướng dưới đáy màn hình) chứa các icon chính, giống hệt trải nghiệm dùng App.
   2. Lưới Content (Product Grid) thay đổi mấy cột?
   - Desktop: Lưới sản phẩm hiển thị 6 cột (mỗi thẻ sản phẩm rất rộng rãi).
   - Tablet: Lưới sản phẩm rút xuống còn 3 hoặc 4 cột.
     -Mobile: Lưới sản phẩm chỉ còn 2 cột (để đảm bảo ảnh sản phẩm và giá tiền vẫn đủ lớn để đọc và chạm tay vào).
   3. Elements nào bị ẩn trên Mobile?
   - Sidebar lọc (Filter): Trên Desktop, bộ lọc (giá, thương hiệu, đánh giá) nằm cố định ở cột bên trái. Trên Mobile, nó bị ẩn hoàn toàn và được thay thế bằng một nút "Lọc", khi bấm vào sẽ trượt ra một ngăn kéo (Offcanvas) hoặc popup.
   - Banner phụ / Quảng cáo hai bên: Bị cắt bỏ hoàn toàn để tập trung vào luồng mua sắm chính.
   - Footer: Cột link liên kết ở Footer (Về chúng tôi, Hỗ trợ khách hàng) thường bị ẩn thành các dạng Accordion (tiêu đề có dấu mũi tên, chạm vào mới xổ danh sách ra).
   4. Font size có thay đổi không?
      Có thay đổi đáng kể. Trên Desktop, tiêu đề sản phẩm và giá được đặt font chữ to (khoảng 16px - 20px). Khi xuống Mobile, font chữ được scale nhỏ lại (khoảng 12px - 14px) để tránh việc chữ bị rớt dòng quá nhiều gây nát thẻ sản phẩm.

- screenshot:

  <img src="/Users/hanguyen/Documents/PBT/PBT_05/screenshots/Screenshot 2026-05-21 at 16.25.36.png" width="500" alt="" >

### Câu C2 (10đ) — Thiết kế Responsive Strategy

### 1. Mobile (< 768px)

Bố cục trên Mobile ưu tiên cuộn dọc (1 cột), các thành phần xếp chồng lên nhau để dễ dàng thao tác bằng một tay.

- **Header:** Hiển thị Logo (bên trái) và Icon điện thoại (bên phải). **Ẩn phần text số điện thoại** để tiết kiệm không gian.
- **Hero Image:** Chiều cao nhỏ (khoảng 250px - 300px), text giới thiệu căn giữa.
- **Grid ảnh món ăn:** Xếp **2 cột x 3 hàng** (giúp người dùng không phải cuộn quá dài so với 1 cột).
- **Form đặt bàn nằm ở đâu?:** Đặt ngay dưới khối ảnh món ăn. Các ô input (ngày, giờ, số người) xếp dọc (stack) thành 1 cột chiếm 100% chiều rộng để dễ chạm nhập liệu.
- **Bản đồ:** Nằm dưới cùng trước Footer. (Hoặc có thể **ẩn bản đồ trực tiếp**, thay bằng một nút bấm _"Xem bản đồ đường đi"_, khi bấm vào sẽ mở Google Maps app hoặc popup).

---

### 2. Tablet (768px - 1023px)

Màn hình Tablet có không gian rộng hơn, bắt đầu tận dụng các bố cục hàng ngang để giảm chiều dài trang.

- **Header:** Logo (trái) và hiển thị đầy đủ số điện thoại text (phải).
- **Hero Image:** Cân đối lại kích thước, chiều cao khoảng 400px.
- **Grid ảnh món ăn (Mấy cột?):** Chuyển sang lưới **3 cột x 2 hàng**.
- **Bản đồ nằm đâu?:** Bố cục Form và Bản đồ được đặt **cạnh nhau (side-by-side)** chia tỷ lệ 50-50. Form đặt bàn nằm bên trái, Bản đồ Google Maps nằm ngay bên phải để khách hàng vừa xem địa chỉ vừa chốt đặt bàn. Trong nội bộ Form, các ô input như Ngày và Giờ có thể xếp chung 1 hàng (2 cột nhỏ).
- **Footer:** Trải dài toàn màn hình, chia 2-3 cột thông tin.

---

### 3. Desktop (≥ 1024px)

Trên Desktop, không gian cực kỳ rộng rãi. Mục tiêu là để khách hàng nhìn thấy món ăn hấp dẫn và Form đặt bàn cùng một lúc.

- **Layout bao nhiêu cột? Sidebar có không?:** Toàn bộ phần thân trang (sau Hero Image) sẽ được chia làm **Layout 2 cột bất đối xứng** (Ví dụ: Main Content chiếm 65% - Sidebar chiếm 35%). **Có sử dụng Sidebar.**
- **Main Content (Trái):**
  - Chứa Grid 6 ảnh món ăn (chia làm **3 cột x 2 hàng**). Hình ảnh to, hiển thị chi tiết hiệu ứng hover.
  - Chứa Bản đồ Google Maps kích thước lớn ngay dưới khối món ăn.
- **Sidebar (Phải):**
  - Chứa **Form đặt bàn**. Thiết lập Form này ở trạng thái `position: sticky;` để khi khách hàng cuộn chuột xem ảnh món ăn bên trái, Form đặt bàn vẫn luôn ghim cố định bên phải màn hình, thúc đẩy hành động (Call-to-Action) đặt bàn bất cứ lúc nào.
- **Header & Footer:** Dàn trải đầy đủ 100% chiều rộng, Header có thể thêm các menu điều hướng ngang (Về chúng tôi, Thực đơn, Liên hệ).
