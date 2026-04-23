# 📋 PHIẾU BÀI TẬP 02

# **HTML5 FORMS & MEDIA — Biểu mẫu, Validation & Đa phương tiện**

> **Tài liệu tham chiếu:** `tuan_1_html5/06_graphics_multimedia.md` + `07_forms_interactive.md`
>
> ⏱️ **Thời gian:** 120 phút | 📊 **Tổng điểm:** 100

---

## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — Input Types

1. type="email" -> Ô nhập văn bản, tự động kiểm tra định dạng địa chỉ email -> Dùng cho form đăng ký tài khoản
2. type="password" -> Ô nhập ký tự bị ẩn hiển thị dưới dạng dấu chấm hoặc dấu sao -> Dùng cho ô nhập mật khẩu khi đăng nhập hoặc khi ô có định dạng mật mã
3. type="number" -> Ô nhập số có nút mũi tên tăng/giảm giá trị -> Tự động kiểm tra định dạng số, giới hạn giá trị nhỏ nhất và lớn nhất -> Dùng để chọn số lượng sản phẩm muốn mua
4. type="tel" -> Ô nhập văn bản, kích hoạt bàn phím số trên các thiết bị di động -> Dùng để nhập số điện thoại người nhận hàng
5. type="date" -> Ô nhập hiển thị kèm giao diện bảng lịch để chọn ngày -> Tự động kiểm tra tính hợp lệ của ngày tháng năm -> Dùng để khách hàng chọn ngày sinh hoặc lịch giao hàng
6. type="checkbox" -> Một ô vuông nhỏ cho phép người dùng đánh dấu chọn hoặc bỏ chọn -> Dùng trong bộ lọc sản phẩm để chọn theo tiêu chí nhu cầu khách
7. type="radio" -> Một nút tròn cho phép chọn duy nhất một tùy chọn trong một nhóm -> Dùng để lựa chọn phương thức thanh toán
8. type="file" -> Nút bấm mở cửa sổ duyệt tệp tin từ thiết bị -> Có thể giới hạn loại tệp (ảnh, video) thông qua thuộc tính accept -> Dùng để khách hàng tải ảnh thực tế lên khi viết đánh giá sản phẩm.
9. type="range" -> Một thanh trượt để chọn giá trị trong một dải định sẵn -> Dùng làm thanh kéo lọc khoảng giá sản phẩm
10. type="search" -> Ô nhập văn bản có thêm nút xóa nhanh nội dung (dấu x) ở cuối -> Dùng cho thanh tìm kiếm sản phẩm trên giao diện chính của trang

### Câu A2 (5đ) — Validation Attributes

1. Chặn Submit - Để trống trường bắt buộc do thuộc tính required yêu cầu k để chống
2. Chặn Submit - Giá trị không phải là email hợp lệ do thiếu @
3. Chặn Submit - Giá trị (15) lớn hơn mức tối đa cho phép do nó đang ghi kết quả là 10
4. Chặn Submit - Không khớp định dạng yêu cầu do cần đúng 10 chữ số
5. Chặn Submit - Độ dài chuỗi là 3 ngắn hơn mức tối thiểu là 8

<img src="/Users/hanguyen/Documents/PBT/PBT_02/screenshots/Screenshot 2026-04-23 at 20.35.49.png" width="200" alt="">
<img src="/Users/hanguyen/Documents/PBT/PBT_02/screenshots/Screenshot 2026-04-23 at 20.36.07.png" width="200" alt="">
<img src="/Users/hanguyen/Documents/PBT/PBT_02/screenshots/Screenshot 2026-04-23 at 20.37.05.png" width="200" alt="">
<img src="/Users/hanguyen/Documents/PBT/PBT_02/screenshots/Screenshot 2026-04-23 at 20.37.18.png" width="200" alt="">
<img src="/Users/hanguyen/Documents/PBT/PBT_02/screenshots/Screenshot 2026-04-23 at 20.41.24.png" width="200" alt="">

### Câu A3 - Accessibility

**1. Tầm quan trọng của label for="email"**

- Screen Reader: Tạo liên kết logic để trình đọc màn hình đọc đúng tên trường khi người dùng tab tới ô nhập liệu
- Tương tác: Tăng diện tích nhấp chuột người dùng có thể click vào văn bản của nhãn để kích hoạt ô nhập input

**2. Khi nào dùng fieldset và legend**

- Khi nào: Dùng để nhóm các thành phần liên quan chặt chẽ trong form thường là nhóm Radio buttons hoặc Checkboxes
- Ví dụ:

```html
<fieldset>
  <legend>Chọn giới tính:</legend>
  <input type="radio" id="nam" name="gioiTinh" /><label for="nam">Nam</label>
  <input type="radio" id="nu" name="gioiTinh" /><label for="nu">Nữ</label>
</fieldset>
```

**3. còn về aria-label**

- Dùng cho các phần tử không có văn bản hiển thị như nút Close chỉ có icon "X" hoặc nút Search chỉ có icon kính lúp
  **còn nếu dùng thay cho label**
- Gây ghi đè: Screen Reader sẽ bỏ qua label để chỉ đọc aria-label, dễ gây sai lệch thông tin
- Ưu tiên Native: Thẻ label là chuẩn mặc định, ổn định và hỗ trợ tốt nhất trên mọi thiết bị
- Lỗi dịch thuật: Các công cụ dịch tự động thường không dịch được nội dung bên trong aria

### Câu A4 - Media

1. Thuộc tính loading="lazy"

- Giải thích: Hoãn việc tải ảnh cho đến khi người dùng cuộn trang đến gần vị trí của ảnh
- Cải thiện: Tốc độ tải trang ban đầu, tiết kiệm băng thông và giảm tải cho bộ nhớ
- Khi nào KHÔNG nên dùng: Không dùng cho các ảnh ở đầu trang mà người dùng sẽ thấy ngay khi vừa mở web

2. Thẻ video và format

- Tại sao cần nhiều source: Để đảm bảo video có thể chạy được trên nhiều loại trình duyệt khác nhau (nếu trình duyệt không hỗ trợ định dạng này sẽ tự động chuyển sang định dạng kia).
- 3 format phổ biến: MP4, WebM, Ogg.

3. Thuộc tính alt

- Tác dụng: Mô tả nội dung ảnh cho trình đọc màn hình (người khiếm thị), hỗ trợ SEO và hiển thị thay thế khi ảnh bị lỗi link.
- Viết alt tốt cho 3 trường hợp:
  - Ảnh iPhone 16: alt="Điện thoại iPhone 16 màu Titan Sa mạc góc nhìn chính diện"
  - Ảnh trang trí: alt="" (để trống để trình đọc màn hình bỏ qua)
  - Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ cột doanh thu Quý 1 năm 2026 với mức tăng trưởng 15%"

### Câu A5 - So sánh figure vs img

1. Cách 1 (Dùng img)

- Khi nào dùng: Dùng cho các ảnh là một phần của dòng nội dung hoặc ảnh trang trí, không cần chú thích đi kèm
- Ví dụ 1: Ảnh đại diện của người dùng cạnh tên tài khoản
- Ví dụ 2: Các icon nhỏ hoặc biểu tượng minh họa nằm trong đoạn văn

2. Cách 2 (Dùng figure + figcaption)

- Khi nào dùng: Dùng khi ảnh là một đơn vị nội dung độc lập, cần có chú thích rõ ràng hoặc được trích dẫn trong bài viết
- Ví dụ 1: Ảnh sản phẩm trong trang chi tiết kèm theo tên và giá tiền bên dưới
- Ví dụ 2: Sơ đồ, biểu đồ hoặc ảnh minh họa trong một bài báo cần ghi nguồn hoặc mô tả nội dung
