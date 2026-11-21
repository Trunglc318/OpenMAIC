# Chính sách riêng tư và Điều khoản sử dụng — OpenMAIC (bản triển khai tại Việt Nam)

> **ĐÂY LÀ BẢN NHÁP, CHƯA PHẢI VĂN BẢN PHÁP LÝ HOÀN CHỈNH.**
> Bản này được viết để quản trị viên của một bản triển khai OpenMAIC
> tại Việt Nam có khung khởi đầu. **Cần luật sư rà lại trước khi
> công bố và áp dụng**, đặc biệt khi triển khai trong trường học
> hoặc cho học sinh dưới 16 tuổi.
>
> Các chỗ ghi `[ĐIỀN THÔNG TIN]` là bắt buộc phải điền trước khi dùng.
> Không để nguyên các chỗ trống đó trong bản công bố.
>
> Căn cứ tham khảo: Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.
> Bản này không thay thế tư vấn pháp lý.

## 1. Chúng tôi là ai

- Tên đơn vị / trường / tổ chức triển khai: `[ĐIỀN THÔNG TIN]`
- Người quản trị hệ thống: `[ĐIỀN THÔNG TIN]`
- Email liên hệ về dữ liệu cá nhân: `[ĐIỀN THÔNG TIN]`
- Địa chỉ: `[ĐIỀN THÔNG TIN]`

OpenMAIC là phần mềm mã nguồn mở, lớp học tương tác đa tác nhân.
Bản triển khai này do đơn vị trên tự vận hành (tự host), không phải
bản demo công khai của nhà phát triển gốc.

## 2. Dữ liệu nào được thu thập

Khi bạn dùng bản triển khai này, hệ thống có thể lưu:

- **Thông tin tài khoản / hồ sơ:** tên hiển thị, biệt danh, mô tả
  hồ sơ bạn tự nhập để cá nhân hóa bài học.
- **Nội dung học tập:** yêu cầu tạo bài học, tài liệu bạn tải lên,
  bài nộp trong PBL, câu trả lời quiz, lịch sử trò chuyện với
  giảng viên AI và bạn học AI.
- **Dữ liệu sử dụng:** khóa học đã tạo, tiến độ học, thời gian học.
- **Dữ liệu kỹ thuật:** nhật ký hệ thống phục vụ vận hành và sửa lỗi.

Hệ thống **không** yêu cầu số điện thoại, số căn cước công dân,
địa chỉ nhà, hay thông tin thanh toán. Vui lòng không nhập các
thông tin nhạy cảm đó vào ô trò chuyện hay tài liệu tải lên.

## 3. Dữ liệu được lưu ở đâu

- Dữ liệu khóa học và hồ sơ được lưu trong cơ sở dữ liệu PostgreSQL
  do đơn vị triển khai tự vận hành.
- Vị trí máy chủ: `[ĐIỀN THÔNG TIN — ví dụ: máy chủ tại Việt Nam / máy chủ thuê tại …]`
- Tài liệu tải lên được lưu trong thư mục dữ liệu của máy chủ
  (`data/` trong bản triển khai Docker).
- Khóa API của các nhà cung cấp model (provider) do quản trị viên
  hoặc người dùng nhập được mã hóa bằng `OPENMAIC_SECRET_KEY`.
  Không có khóa này thì không đọc được khóa đã lưu. Quản trị viên
  phải giữ khóa mã hóa này cẩn thận, như giữ khóa của cơ sở dữ liệu.

## 4. Dữ liệu được gửi cho bên thứ ba nào

Để tạo bài học, hệ thống gọi tới nhà cung cấp AI mà quản trị viên
đã cấu hình trong `openmaic.yml` (ví dụ OpenAI, Google Gemini,
Anthropic, DeepSeek, hoặc model chạy local qua Ollama / Lemonade).

- Khi dùng provider cloud, nội dung yêu cầu và tài liệu liên quan
  sẽ được gửi tới provider đó để xử lý, theo chính sách của provider.
- Khi dùng model local, nội dung không rời khỏi máy chủ của
  đơn vị triển khai.
- Danh sách provider đang bật trong bản triển khai này:
  `[ĐIỀN THÔNG TIN — liệt kê provider và mục đích, ví dụ: LLM, TTS, ASR, tìm kiếm web]`

**Về việc dùng dữ liệu để train model:** OpenMAIC không tự ý dùng
dữ liệu học sinh để train model. Việc dữ liệu có được dùng để
cải thiện model hay không **tùy thuộc vào provider đã chọn**
và gói dịch vụ của provider đó. Quản trị viên phải đọc chính sách
của từng provider, chọn gói không dùng dữ liệu để train (nếu có),
và ghi rõ lựa chọn đó ở đây trước khi mở cho học sinh dùng.
Không được ghi “chúng tôi cam kết không train” nếu provider
đang dùng không cam kết điều đó.

## 5. Học sinh dưới 16 tuổi

- Học sinh dưới 16 tuổi chỉ được dùng bản triển khai này khi có
  **sự đồng ý của phụ huynh hoặc người giám hộ**.
- Nhà trường / quản trị viên phải thu thập và lưu sự đồng ý đó
  trước khi tạo tài khoản cho học sinh, theo quy định của
  Nghị định 13/2023/NĐ-CP.
- Phụ huynh có quyền yêu cầu xem, sửa hoặc xóa dữ liệu của con mình
  (xem mục 7).
- Không thu thập dữ liệu của học sinh vượt quá mức cần thiết
  cho việc học. Không dùng dữ liệu học sinh cho quảng cáo.

Mẫu đồng ý của phụ huynh: `[ĐIỀN THÔNG TIN — đính kèm mẫu hoặc link mẫu]`

## 6. Mục đích sử dụng dữ liệu

Dữ liệu chỉ được dùng để:

- Tạo và vận hành lớp học, lưu tiến độ học.
- Hỗ trợ giáo viên theo dõi và đánh giá học sinh.
- Vận hành, bảo trì và sửa lỗi hệ thống.

Dữ liệu không được dùng để quảng cáo, không được bán, không được
chia sẻ cho bên thứ ba ngoài các provider đã liệt kê ở mục 4.

## 7. Quyền của bạn

Bạn có quyền:

- **Xem** dữ liệu của mình trong hệ thống.
- **Sửa** hồ sơ, biệt danh và nội dung đã nhập.
- **Xóa** khóa học, bài nộp và tài khoản của mình — yêu cầu xóa
  gửi tới email ở mục 1. Quản trị viên xử lý trong
  `[ĐIỀN THÔNG TIN — ví dụ: 30 ngày]` và xác nhận lại bằng email.
- **Rút lại sự đồng ý** — việc rút lại không ảnh hưởng tới tính
  hợp pháp của việc xử lý dữ liệu trước đó.
- **Khiếu nại** tới cơ quan có thẩm quyền theo quy định của
  Nghị định 13/2023/NĐ-CP nếu cho rằng dữ liệu của bạn bị xử lý
  trái quy định.

Lưu ý: sau khi xóa, một số bản sao lưu (backup) có thể còn tồn tại
cho tới kỳ backup tiếp theo. Quản trị viên phải ghi rõ chu kỳ
lưu backup ở đây: `[ĐIỀN THÔNG TIN]`.

## 8. Bảo mật

- Truy cập quản trị được giới hạn bằng `ACCESS_CODE` (nếu bật)
  và tài khoản quản trị.
- Khóa provider được mã hóa bằng `OPENMAIC_SECRET_KEY`.
- Quản trị viên phải cập nhật phần mềm, vá lỗi bảo mật, và không
  commit khóa thật vào repo hay file cấu hình mẫu.
- Nếu phát hiện rò rỉ dữ liệu, quản trị viên phải thông báo cho
  người bị ảnh hưởng và cơ quan có thẩm quyền theo quy định
  của Nghị định 13/2023/NĐ-CP.

## 9. Điều khoản sử dụng

- Nội dung do AI tạo ra có thể sai. Người dùng phải kiểm chứng
  trước khi dùng làm tài liệu giảng dạy hay ôn thi chính thức.
- OpenMAIC là công cụ hỗ trợ học tập, không thay thế giáo viên,
  không phải tài liệu chính thức của Bộ Giáo dục và Đào tạo.
- Người dùng không được tải lên nội dung vi phạm pháp luật,
  xâm phạm bản quyền, hay chứa thông tin cá nhân của người khác
  khi chưa được đồng ý.
- Quản trị viên có quyền tạm khóa tài khoản vi phạm điều khoản này.

## 10. Thay đổi chính sách

Khi chính sách này thay đổi, quản trị viên sẽ thông báo trong
`[ĐIỀN THÔNG TIN — ví dụ: trang thông báo của hệ thống / email]`
trước ít nhất `[ĐIỀN THÔNG TIN — ví dụ: 7 ngày]` trước khi áp dụng.

- Ngày ban hành bản nháp: 2026-11-21
- Phiên bản: 0.1 (nháp)
- Người rà soát pháp lý: `[ĐIỀN THÔNG TIN — để trống cho tới khi luật sư ký]`
