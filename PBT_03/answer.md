# 📋 PHIẾU BÀI TẬP 03

# **CSS CORE — Selectors, Box Model, Inheritance & Cascade**

> **Tài liệu tham chiếu:** `tuan_2_css_core/08_introduction_css.md` → `11_box_model.md`
>
> ⏱️ **Thời gian:** 150 phút | 📊 **Tổng điểm:** 100

---

## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — 3 Cách nhúng CSS

- Có 3 cách nhúng css vào html

1. Inline

- Ưu: Tiện khi cần test nhanh hoặc sửa 1 element duy nhất
- Nhược: Code HTML bị rối, khó bảo trì, không tái sử dụng dc lại code css

  <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 21.49.54.png" width="300" alt="" >

2.  External

- Ưu: Tách biệt hoàn toàn giữa nội dung html và giao diện css, có thể tái sử dụng code css và trông sạch code
- Nhược: Tạo thêm một yêu cầu HTTP (HTTP Request) để tải file, có thể làm chậm trang một chút ở lần đầu tiên nếu file quá nặng
- Nên dùng khi nào: Luôn luôn là lựa chọn ưu tiên cho các dự án thực tế, các trang web có nhiều trang con

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 21.35.23.png" width="300" alt="" >

3.  Internal

- Ưu: Tất cả style sẽ chỉ nằm trên 1 file html, không tốn thêm thời gian để yêu cầu tải file từ server
- Nhược: Chỉ có trên 1 trang html duy nhất, code sẽ trở nên bị rối nếu có nhiều style css
- Nên dùng khi nào: Làm các trang Landing Page đơn giản (chỉ có 1 trang duy nhất) hoặc khi cần viết CSS đặc thù cho một trang con mà các trang khác không cần đến

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 20.42.18.png" width="300" alt="" >

**Câu hỏi thêm:** Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"? Giải thích tại sao.

- Cách nhúng css nào được viết sau thì sẽ là thằng thắng cuối vì code sẽ được chạy từ trên xuống dưới, cái sau đè cái trước tuy nhiên chỉ đúng khi các bộ selector có hạng cân nhau
- Còn không thì tính theo độ ưu tiên sẽ được theo thứ tứ là inline > internal/external

### Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả

1. h1 → Chọn: "ShopTlU"
2. .price → Chọn: "25.990.000đ" và "45.990.000đ"
3. #app header → Chọn: "ShopTLU", "Home", "Products", "About"
4. nav a:first-child → Chọn: "Home"
5. .product.featured h2 → Chọn: "MacBook Pro"
6. article > p → Chọn: "25.990.000đ", "Mô tả sản phẩm...", "45.990.000đ", "Mô tả sản phẩm..."
7. a[href="/"] → Chọn: "Home"
8. .top-bar.dark h1 → Chọn: "ShopTLU"

<img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-03 at 23.19.31.png" width="300" alt="" >

### Câu A3 (7đ) — Box Model — Tính toán kích thước

/_ Trường hợp 1: content-box (mặc định) _/

- Chiều rộng hiển thị = 400 + 40 + 10 = 450 (do padding và border là cả trái lẫn phải và đang là content-box)
- Không gian chiếm trên trang = 450 + 20(tổng của margin trái phải) = 470

/_ Trường hợp 2: border-box _/

- Chiều rộng hiển thị = 400
- Kích thước content thực tế = 400 - 20\*2 của padding và - 10 của border = 350px
- Không gian chiếm trên trang = 400 + 20(của margin trái phải)

/_ Trường hợp 3: Margin collapse _/

- Khoảng cách giữa box-a và box-b = 40
- Giải thích tại sao KHÔNG PHẢI 65px: Khi hai lề dọc (top và bottom) của hai khối nằm đè lên nhau, chúng không đứng xếp hàng nối tiếp nhau (25+40=65) mà chúng hòa vào nhau và trình duyệt sẽ chọn giá trị lớn nhất làm khoảng cách cuối cùng

### Câu A4 (5đ) — Specificity (Độ ưu tiên)

1. Tính specificity

   <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-05 at 21.00.36.png" width="300" alt="" >

2. Element sẽ có màu đỏ do rule C có a = 1 tức là có id selector nên nó thắng tuyệt đối
3. Element sẽ có màu cam do đó là inline nên có độ ưu tiên cao hơn các selector còn lại
4. Element sẽ có màu đen do việc dùng !important nó sẽ đè lên tất cả dù các selector còn lại có mạnh đến đâu

## PHẦN B — THỰC HÀNH CODE (55 điểm)

### Bài B2 (20đ) — Box Model Lab

- Hộp 1 (content-box): chiều rộng thực tế = 350 px (đo từ DevTools)
- Hộp 2 (border-box): chiều rộng thực tế = 300 px (đo từ DevTools)

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-05 at 21.54.22.png" width="300" alt="" >

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-05 at 21.54.29.png" width="300" alt="" >

- Vì content-box giữ nguyên kích thước nội dung là 300px, sau đó cộng thêm padding (20px mỗi bên) và border (5px mỗi bên) tổng: 300+20+20+5+5=350
- Vì border-box gộp cả padding và border vào trong con số 300px

- Trường hợp dùng border-box thì tổng chiều rộng bằng 250px + 500px + 250px = 1000px do padding đã được tính vào trong width đó
- Trường hợp không dùng border-box thì:

Cột trái: 250px(width)+15px(padding−left)+15px(padding−right)=280px

Cột giữa: 500px(width)+20px(padding−left)+20px(padding−right)=540px

Cột phải: 250px(width)+15px(padding−left)+15px(padding−right)=280px

Tổng thực tế: 280+540+280=1100px

- Kết quả khi dùng border-box:

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-06 at 20.14.23.png" width="500" alt="" >

### Bài B3 (15đ) — Specificity Battle

- Màu hiển thị trên element sẽ là màu đen do có specificity cao nhất là (1,2,1)
- Dù có thay đổi vị trí thì màu vẫn sẽ là màu đen do trình duyệt sẽ ưu tiên specificity cao nhất trước rồi nếu rule nó bằng nhau thì mới ưu tiên cái nào viết sau
- Hình ảnh kết quả:

    <img src="/Users/hanguyen/Documents/PBT/PBT_03/screenshots/Screenshot 2026-05-06 at 20.49.14.png" width="300" alt="" >

## PHẦN C — DEBUG & SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Debug CSS Layout

1. Tính chiều rộng thực tế:

- Sidebar: 300px(width)+40px(padding)+2px(border)=342px
- Content: 660px(width)+60px(padding)+2px(border)=722px
- Tổng là 1064px

2. Giải thích layout bị vỡ do: thằng container cha rộng có 960px thôi trong khi chiều rộng thực tế là 1064px nên trình duyệt không còn chỗ trống để chứa nên sẽ đẩy xuống dòng

3. 2 cách sửa là:

- Dùng border-box
- Mình sẽ phải trừ bớt padding và border đi sao cho nó khớp với 960px

### Câu C2 (10đ) — Cascade Puzzle

1. "Sản phẩm A" (h2) có `font-size` = 20px và `color` = green

- có độ ưu tiên cao hơn và ghi đè các thiết lập từ container
- Mặc dù có #featured .title định nghĩa màu đỏ, nhưng class .highlight sử dụng thuộc tính !important, khiến nó trở thành mức ưu tiên cao nhất

2. "Mô tả sản phẩm" (p trong card featured) có `color` = blue

- color: blue. Thẻ p này nằm trong .card có định nghĩa color: blue. Vì nó có thuộc tính color: inherit, nó sẽ lấy trực tiếp màu từ phần tử cha gần nhất là .card

3. "Sản phẩm B" (h2) có `font-size` = 20px và `color` = blue

- font-size: 20px. Tương tự Sản phẩm A, nó nhận giá trị từ .card .title
- color: blue. Vì không có ID #featured hay class .highlight áp dụng lên phần tử này, nó kế thừa màu từ .card

4. "Mô tả sản phẩm B" (p.highlight) có `color` = green

- color: green. Thuộc tính .highlight { color: green !important; } áp dụng trực tiếp lên thẻ p này và ghi đè tất cả các quy tắc màu sắc khác
