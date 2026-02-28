# 📘 E360 Exam Support Extension

Extension hỗ trợ hiển thị và quản lý thông tin trong phòng thi trên hệ
thống **e360.fpt.edu.vn**.

Tiện ích này tự động điều chỉnh giao diện phòng thi, làm nổi bật các
thông tin quan trọng và hiển thị các nhắc nhở cần thiết nhằm hỗ trợ giám
thị và sinh viên trong quá trình thi.

------------------------------------------------------------------------

## 🚀 Tính năng chính

### 1️⃣ Chuẩn hóa hiển thị danh sách thí sinh

-   Tự động xóa tiền tố trước dấu `-` và chỉ giữ lại `STT:XX`
-   Làm nổi bật STT bằng màu nền riêng
-   Chuẩn hóa bảng hiển thị:
    -   Font-size: 18px
    -   Height: 30px
    -   Căn giữa nội dung
-   Tăng độ rõ ràng khi theo dõi phòng thi đông người

------------------------------------------------------------------------

### 2️⃣ Rút gọn họ tên thí sinh

Tự động chuyển đổi:

Ngô Giàng Thị Thanh\
→ N.G.T.Thanh

Giúp: - Tiết kiệm không gian hiển thị - Dễ quan sát - Hạn chế tràn dòng

------------------------------------------------------------------------

### 3️⃣ Hiển thị Floating Box thông tin quan trọng

#### 🔗 Box giữa trên

Hiển thị nhanh đường dẫn checkout: e360.fpt.edu.vn/checkout

#### ✍️ Box giữa dưới

Hiển thị **Mã đề thi** do người dùng nhập khi mở trang.\
Mã đề được làm nổi bật để tránh nhầm lẫn.

------------------------------------------------------------------------

### 4️⃣ Nhắc nhở quy định phòng thi

#### 📶 Box bên trái

-   Mật khẩu wifi
-   Nhắc "FORGET tất cả wifi"

#### 🚫 Box bên phải

-   Nhắc không để điện thoại trên người

Các box hiển thị cố định (floating), dễ nhìn nhưng không gây ảnh hưởng
nội dung chính.

------------------------------------------------------------------------

## 🎯 Mục đích sử dụng

Extension được thiết kế nhằm: - Hỗ trợ giám thị quản lý phòng thi hiệu
quả hơn - Giảm nhầm lẫn mã đề - Tăng tính trực quan khi theo dõi danh
sách thí sinh - Nhắc nhở quy định thi rõ ràng và liên tục

------------------------------------------------------------------------

## 🛠 Cách cài đặt (Chrome)

### Bước 1: Tải source code

Clone repository hoặc tải file ZIP về máy.

### Bước 2: Mở trang quản lý extension

Truy cập: chrome://extensions

### Bước 3: Bật Developer Mode

Gạt công tắc ở góc phải phía trên.

### Bước 4: Load extension

-   Chọn **Load unpacked**
-   Chọn thư mục chứa extension

------------------------------------------------------------------------

## 📂 Cấu trúc cơ bản

/manifest.json\
/content.js\
/README.md

------------------------------------------------------------------------

## 🔒 Phạm vi hoạt động

Extension chỉ hoạt động trên: e360.fpt.edu.vn

Không: - Thu thập dữ liệu cá nhân - Gửi dữ liệu ra bên ngoài - Tương tác
với hệ thống ngoài phạm vi hiển thị giao diện

------------------------------------------------------------------------

## ⚠️ Lưu ý

-   Chỉ sử dụng trong môi trường phòng thi nội bộ
-   Không chỉnh sửa nếu không hiểu rõ cấu trúc DOM của hệ thống
-   Không sử dụng cho mục đích gian lận thi cử

------------------------------------------------------------------------

## 📌 Thông tin phiên bản

Phiên bản hiện tại: 1.0.1\
Tác giả: ThanhNG4
