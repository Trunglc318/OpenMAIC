# Ví dụ PBL tiếng Việt — Dự án Python “Chào bạn tương lai”

> Tài liệu này giới thiệu ví dụ học theo dự án (PBL) bằng tiếng Việt,
> tương đương với ví dụ `future-self-lite` trong repo gốc.
> Ví dụ gốc có README bằng tiếng Trung; tài liệu này là bản tiếng Việt
> đi kèm, không thay thế code hay test của ví dụ gốc.

## 1. Dự án này là gì

**“Chào bạn tương lai”** là một dự án Python nhỏ, độc lập, không phụ
thuộc vào dự án có sẵn trong OpenMAIC hay đăng ký tĩnh nào.

Học sinh viết một hàm chào hỏi đơn giản. Ban đầu, hàm để trống.
Học sinh hoàn thiện hàm, rồi hệ thống chấm tự động sẽ kiểm tra
kết quả với ba loại đầu vào:

- tên tiếng Việt,
- tên tiếng Anh,
- tên rỗng (không nhập tên).

Mục tiêu không phải viết code dài, mà là làm quen với việc:
viết hàm, chạy thử, đọc kết quả chấm, và sửa lại cho đúng.

## 2. Cấu trúc 7 chặng

Dự án đi qua 7 chặng (milestone), theo đúng khung PBL của OpenMAIC.
Mỗi chặng có một nhiệm vụ rõ ràng và một bài nộp.

| Chặng | Nội dung | Học sinh làm gì |
| --- | --- | --- |
| 1 | Giới thiệu | Đọc bối cảnh, hiểu yêu cầu: viết hàm chào hỏi. |
| 2 | Lập kế hoạch | Viết kế hoạch ngắn: hàm nhận gì, trả về gì, test ra sao. |
| 3 | Tìm hiểu | Đọc tài liệu gợi ý về hàm, chuỗi và giá trị trả về trong Python. |
| 4 | Viết code | Viết hàm chào hỏi trong file `src/main.py`. |
| 5 | Chạy thử | Chạy thử với tên tiếng Việt, tên tiếng Anh và tên rỗng. |
| 6 | Sửa lỗi | Đọc kết quả chấm, sửa các trường hợp còn sai. |
| 7 | Tổng kết | Nộp bản cuối, viết ngắn gọn đã học được gì và còn vướng ở đâu. |

Tài nguyên đi kèm gồm 4 loại, như trong ví dụ gốc:

- `skeleton/` — khung code ban đầu, gồm `PLAN.md` và `src/main.py`.
- `skills/` — tài liệu hướng dẫn theo chặng (`SKILL.md`, `A-intro.md`,
  `A-decisions.md`, `A-plan.md`, `A-recap.md`, `A-implement.md`).
- `docs/brief.md` — mô tả ngắn gọn về dự án.
- `tests/` — bộ chấm tự động, gồm `check.py` và `message.json`.

## 3. Cách build gói khóa học

Chạy ở thư mục gốc của repo OpenMAIC:

```bash
node scripts/build-pbl-example.mjs
```

Muốn chỉ định nơi xuất file ZIP thì thêm đường dẫn:

```bash
node scripts/build-pbl-example.mjs /tmp/course.maic.zip
```

Lệnh này sẽ đóng gói thành file, ví dụ:

```text
dist/future-self-lite.maic.zip
```

Trong file ZIP có:

```text
future-self-lite.maic.zip
├── manifest.json
└── pbl/<nội dung băm>/
    ├── project.json
    ├── skeleton/
    │   ├── PLAN.md
    │   └── src/main.py
    ├── skills/
    │   ├── SKILL.md
    │   ├── A-intro.md
    │   ├── A-decisions.md
    │   ├── A-plan.md
    │   ├── A-recap.md
    │   └── A-implement.md
    ├── docs/brief.md
    └── tests/
        ├── check.py
        └── message.json
```

Script build sẽ tính chỉ mục file và băm nội dung, rồi tạo manifest
và tham chiếu cảnh. Ví dụ này không có tài nguyên media nên không
sinh thư mục `media/`. Tên dự án được lưu trong `project.json` và
manifest; thư mục dùng nội dung băm. Sửa file nguồn rồi chạy lại
script thì chỉ mục và tham chiếu sẽ được cập nhật.

## 4. Cách nhập vào OpenMAIC

1. Mở trang chủ OpenMAIC.
2. Chọn “Nhập lớp học” (Import classroom).
3. Chọn file `dist/future-self-lite.maic.zip` vừa build.
4. Mở lớp học và bắt đầu từ chặng 1.

Lưu ý: nhập file chỉ lưu tài nguyên; muốn học thật thì máy chủ
cần được cấu hình model và sandbox chia sẻ. Thư mục `tests/` do
bộ chấm cung cấp tạm thời, không sao chép vào khu làm việc của
học sinh.

## 5. Cách chấm

- Bộ chấm chạy bằng Python trên máy chủ, với đầu vào tiếng Việt,
  tiếng Anh và rỗng như đã nói ở mục 1.
- Code ban đầu chưa hoàn thiện nên sẽ chấm **không đạt** — đó là
  trạng thái đúng, không phải lỗi.
- Sau khi học sinh bổ sung hàm trong khu làm việc tạm thời, bộ chấm
  sẽ chạy lại và cho kết quả đạt nếu cả ba loại đầu vào đều đúng.

Tài liệu này **không bịa thêm code test mới**. Mô tả test ở trên
chỉ tóm tắt lại hành vi của `tests/check.py` và `message.json`
trong ví dụ gốc. Muốn đổi test, phải sửa trực tiếp hai file đó
trong `examples/pbl/future-self-lite/` và chạy lại bước kiểm chứng
ở mục 6.

## 6. Kiểm chứng

```bash
PBL_PACKAGE_TOOLCHAINS=1 pnpm exec vitest run tests/pbl/v3/minimal-project-package.test.ts
```

Test này sẽ đóng gói thật, đọc và kiểm tra 12 file nguồn,
kiểm tra tài liệu gắn với bài học, và dùng Python trên máy để
chạy bộ chấm: code ban đầu chấm không đạt, sau khi bổ sung hàm
trong khu làm việc tạm thời thì chấm đạt. Source code ban đầu
vẫn giữ trạng thái chưa hoàn thiện.

Quy trình làm việc trên trình duyệt (workbench) được kiểm tra
bằng test hồi quy riêng. Các bước kiểm chứng trên không gọi
model thật hay sandbox cloud.

## 7. Gợi ý cho giáo viên Việt Nam

- Dùng dự án này làm bài đầu tiên cho học sinh mới học Python,
  trước khi giao dự án dài hơn.
- Nhắc học sinh thử tên có dấu tiếng Việt (ví dụ “An”, “Minh Anh”)
  để thấy code xử lý chuỗi Unicode như thế nào.
- Khi học sinh hỏi “sao tên rỗng lại sai?”, đó là dịp tốt để nói
  về trường hợp biên (edge case) và cách viết code phòng thủ.
- Không dùng kết quả chấm tự động này làm điểm chính thức duy nhất;
  kết hợp với nhận xét của giáo viên về cách học sinh lập kế hoạch
  và giải thích code của mình.
