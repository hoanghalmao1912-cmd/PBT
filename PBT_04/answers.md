### Câu A1 (10đ) — 5 Loại Positioning

Đọc chương 12. Điền bảng sau mà **KHÔNG** tra Google:

| Position   | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí                            | Cuộn theo trang? | Use case                                                  |
| ---------- | ------------------------- | -------------------------------------------- | ---------------- | --------------------------------------------------------- |
| `static`   | Có                        | Mặc định (không thể chỉnh top/left)          | Có               | Các phần tử văn bản, bố cục cơ bản                        |
| `relative` | Có                        | Chính vị trí ban đầu của nó                  | Có               | Làm gốc tọa độ cho phần tử con dùng absolute              |
| `absolute` | Không                     | Phần tử cha gần nhất có position khác static | Có               | Icon thông báo, menu dropdown, tooltip                    |
| `fixed`    | Không                     | Khung hình trình duyệt (Viewport)            | Không            | Header cố định, nút "Back to top", quảng cáo góc màn hình |
| `sticky`   | Có                        | Viewport (khi cuộn đến điểm giới hạn)        | Có               | Tiêu đề bảng hoặc thanh menu giữ lại khi cuộn             |

1. Khi nào absolute tham chiếu body?
   Phần tử absolute sẽ tham chiếu đến body khi tất cả các phần tử cha bao quanh nó đều có position: static (mặc định) hoặc nó không có phần tử cha nào

2. Khi nào absolute tham chiếu parent?
   Nó sẽ tham chiếu đến một phần tử cha cụ thể khi phần tử cha đó được thiết lập thuộc tính position là relative, absolute, hoặc fixed
3. Khái niệm "nearest positioned ancestor"
   Đây là tổ tiên gần nhất có vị trí được thiết lập. Trong CSS, một phần tử được coi là "positioned" nếu thuộc tính position của nó khác với static

- Trình duyệt sẽ đi ngược lên từ phần tử hiện tại để tìm thẻ cha, ông, hoặc cố đầu tiên có position khác static.
- Ngay khi tìm thấy, nó sẽ dùng kích thước và tọa độ của tổ tiên đó làm hệ quy chiếu để tính toán các giá trị top, right, bottom, left của phần tử con

### Câu A2 (10đ) — Flexbox vs Grid

1. TH1: 4 items sẽ nằm trên cùng 1 hàng vì mỗi item có flex: 1, chúng sẽ chia đều chiều rộng của container (mỗi cái chiếm 25%)

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.03.36.png" width="300" alt="" >

2. TH2:
   Mỗi item chiếm 45% + 2.5%\*2 (margin) = 50% chiều rộng và vì tổng là 100%, mỗi hàng chứa được tối đa 2 items. Với 6 items chúng sẽ xếp thành 3 hàng 2 cột

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.05.36.png" width="300" alt="" >

3. TH3:
   3 items nằm trên 1 hàng

- space-between: Item 1 sát lề trái, Item 3 sát lề phải, Item 2 nằm chính giữa.
- align-items: center: Các item được căn giữa theo trục dọc của container.

 <img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.08.15.png" width="300" alt="" >

4. TH4:
   Dự đoán: 1 hàng duy nhất có 3 cột, cột 1 và 3 rộng cố định 200px, cột 2 dùng 1fr sẽ tự động co giãn để chiếm toàn bộ phần diện tích còn lại

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.10.36.png" width="300" alt="" >

5. TH5:

- Bố cục gồm 3 hàng và 3 cột

Hàng 1: Items 1, 2, 3

Hàng 2: Items 4, 5, 6

Hàng 3: Item 7 nằm ở cột đầu tiên bên trái, hai cột còn lại để trống

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 11.12.34.png" width="300" alt="" >

## PHẦN B — THỰC HÀNH CODE (60 điểm)

### Bài B1 (15đ) — Positioning Playground

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 18.48.12.png" width="500" alt="" >

<img src="/Users/hanguyen/Documents/PBT/PBT_04/screenshots/Screenshot 2026-05-10 at 18.48.51.png" width="500" alt="" >
