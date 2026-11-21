# Bảng thuật ngữ tiếng Việt — OpenMAIC

> Mục đích: để mọi người dịch giao diện, viết tài liệu và soạn prompt
> cho OpenMAIC dùng cùng một cách gọi, không mỗi người một kiểu.
> Áp dụng cho `lib/i18n/locales/vi-VN.json`,
> `lib/i18n/workbench-locales/vi-VN.json`, tài liệu tiếng Việt và prompt
> tạo bài học.
>
> Quy tắc chung:
> - Dịch nghĩa, không dịch từng từ.
> - Giữ nguyên tiếng Anh khi đó là tên riêng, tên model, tên provider,
>   key JSON, enum, hoặc khi dịch ra tiếng Việt sẽ gây nhầm lẫn.
> - Không dịch biến nội suy `{{...}}`, không đổi tên key.
> - Khi một thuật ngữ có nhiều nghĩa, ghi chú rõ ngữ cảnh ở cột “Ghi chú”.

## 1. Lớp học và bài học

| Thuật ngữ gốc | Tiếng Việt chuẩn | Ghi chú |
| --- | --- | --- |
| classroom | lớp học | Cả lớp học trực tuyến trong OpenMAIC, không phải phòng học vật lý. |
| course | khóa học / bài học | Dùng “khóa học” cho một chuỗi bài dài, “bài học” cho một bài đơn lẻ. |
| lesson | bài học | Một buổi học trong một khóa học. |
| scene | cảnh / trang | Trong slide thì gọi “trang”, trong mô phỏng / PBL thì gọi “cảnh”. Tránh dùng “cảnh” cho slide. |
| slide | trang chiếu | Không dùng “slide” trong giao diện tiếng Việt, trừ khi nói về file `.pptx`. |
| outline | dàn ý | Dàn ý của một bài học, gồm các cảnh theo thứ tự. |
| course title | tên khóa học | Ngắn, là cụm danh từ, viết bằng ngôn ngữ dạy học. |
| stage | giai đoạn | Một chặng trong PBL hoặc trong một khóa học dài. |
| milestone | cột mốc / chặng | Trong PBL, dùng “chặng” cho thân thiện; “cột mốc” khi cần trang trọng. |
| roster | danh sách lớp | Danh sách giảng viên AI và bạn học AI trong lớp. |

## 2. Kiểm tra và đánh giá

| Thuật ngữ gốc | Tiếng Việt chuẩn | Ghi chú |
| --- | --- | --- |
| quiz | bài kiểm tra | **Không dùng “Câu đố”.** “Câu đố” là riddle / đố vui, không phải bài kiểm tra. |
| question | câu hỏi | |
| answer | câu trả lời | |
| multiple choice | trắc nghiệm nhiều lựa chọn | Viết đầy đủ khi là nhãn loại câu hỏi; có thể viết tắt “trắc nghiệm” khi ngữ cảnh đã rõ. |
| short answer | trả lời ngắn | |
| score / points | điểm | Dùng “điểm”, không dùng “điểm số” dài dòng. |
| feedback | nhận xét | Nhận xét của AI cho bài nộp, không dùng “phản hồi” ở đây. |
| submission | bài nộp | Bài học sinh nộp trong PBL. |
| grading | chấm bài | “AI đang chấm…” — giữ cách gọi này, không dùng “đánh giá” cho hành động chấm. |

## 3. Vai trò AI trong lớp

| Thuật ngữ gốc | Tiếng Việt chuẩn | Ghi chú |
| --- | --- | --- |
| agent | tác nhân AI | Dùng trong tài liệu kỹ thuật. Trong giao diện cho học sinh, gọi “giảng viên AI” / “bạn học AI” cho dễ hiểu. |
| teacher agent | giảng viên AI | |
| classmate agent | bạn học AI | |
| tutor | người hướng dẫn | Trong PBL, người hướng dẫn đồng hành cùng học sinh. |
| persona | nhân vật / tính cách | Mô tả tính cách và phong cách giảng dạy của một vai. |
| narration | lời giảng | Lời giảng viên AI đọc trên mỗi trang chiếu. |
| discussion | thảo luận | Phần thảo luận trong lớp. |
| whiteboard | bảng trắng / bảng tương tác | Dùng “bảng tương tác” khi nói về bảng trong lớp học. |

## 4. Nội dung và phương tiện

| Thuật ngữ gốc | Tiếng Việt chuẩn | Ghi chú |
| --- | --- | --- |
| prompt | yêu cầu / chỉ dẫn | Khi nói với người dùng, dùng “yêu cầu”. Khi nói về prompt hệ thống, dùng “chỉ dẫn”. Không dịch “prompt” trong tài liệu kỹ thuật nếu dễ nhầm. |
| material | tài liệu | Tài liệu người dùng tải lên để tạo bài học. |
| knowledge base | kho kiến thức | |
| interactive | tương tác | “Trang tương tác”, “chế độ tương tác”. |
| simulation | mô phỏng | |
| game | trò chơi | Trong PBL / widget, gọi “trò chơi”, không gọi “game” trong giao diện tiếng Việt. |
| PBL | học theo dự án | Giữ chữ viết tắt PBL lần đầu kèm giải thích: “học theo dự án (PBL)”. |
| TTS | chuyển văn bản thành giọng nói | Giữ viết tắt TTS trong tài liệu kỹ thuật, giải thích đầy đủ lần đầu. |
| ASR | nhận dạng giọng nói | Tương tự TTS: giữ viết tắt ASR trong tài liệu kỹ thuật. |
| voice | giọng đọc / giọng nói | “Giọng đọc” cho TTS, “giọng nói” cho đầu vào của học sinh. |
| video export | xuất video | |
| PPTX export | xuất PPTX | Giữ “PPTX” nguyên, vì đó là định dạng file. |

## 5. Kỹ thuật — giữ nguyên hoặc dịch có điều kiện

| Thuật ngữ gốc | Cách dùng | Ghi chú |
| --- | --- | --- |
| provider | nhà cung cấp | “Nhà cung cấp model” — ví dụ OpenAI, Google Gemini. Không dịch tên riêng của provider. |
| model | mô hình / model | Trong giao diện người dùng, dùng “mô hình”. Trong tài liệu kỹ thuật, “model” được chấp nhận. |
| slot | slot | **Giữ nguyên “slot”.** Đây là khái niệm cấu hình trong `openmaic.yml` (ví dụ `llm`, `tts`, `webSearch`). Dịch ra sẽ mất nghĩa kỹ thuật. |
| API key | khóa API | Không bịa key mẫu, không đưa key thật vào tài liệu. |
| `openmaic.yml` | giữ nguyên | Tên file cấu hình, không dịch. |
| `{{...}}` | giữ nguyên | Biến nội suy của i18next, ví dụ `{{name}}`, `{{count}}`. |
| JSON key | giữ nguyên | Ví dụ `languageDirective`, `courseTitle`, `outlines`. |
| enum | giữ nguyên | Ví dụ `slide`, `quiz`, `interactive`, `pbl`. |
| build | build | Trong workbench, “Chạy build” / “Thu thập kết quả build” theo `fix-vi.json`. Không dịch “build” thành “xây dựng”. |
| sandbox | sandbox | Giữ nguyên, vì là tên tính năng chạy code trong môi trường cách ly. |

## 6. Những từ dễ dịch sai

- **“Câu đố” → không dùng cho quiz.** Chỉ dùng “câu đố” khi đúng là đố vui.
- **“Tham chiếu” cho “reference”:** “Xóa tham chiếu {{label}}”,
  không dùng “xóa trích dẫn” hay “gỡ liên kết”.
- **“Sao chép câu trả lời của Agent”** cho `copyReply`, không dùng
  “Copy” hay “Sao chép phản hồi” một cách tùy tiện.
- **“Lần gọi tool đã bị ngắt”** cho `error.interrupted`,
  giữ “tool” nguyên vì đó là thuật ngữ của workbench.
- **“Lớp học” cho “classroom”, “khóa học” cho “course”:** đừng đổi
  hai từ này cho nhau.
- **“Dàn ý” cho “outline”, “lời giảng” cho “narration”:** đừng dùng
  “phác thảo” hay “thuyết minh” ở đây.

## 7. Cách cập nhật bảng này

1. Khi thêm một key mới vào `vi-VN.json`, tra bảng này trước.
2. Nếu thuật ngữ chưa có trong bảng, đề xuất một cách gọi, ghi rõ
   ngữ cảnh xuất hiện, và nhờ ít nhất một giáo viên / người dùng Việt
   đọc thử trước khi chốt.
3. Khi đổi một cách gọi đã chốt, cập nhật đồng thời cả `vi-VN.json`,
   `workbench-locales/vi-VN.json` và bảng này — không sửa một nơi.
4. Chạy `pnpm run check:i18n-keys` sau mỗi lần sửa để chắc số key
   không đổi, rồi rà lại bằng mắt xem còn chuỗi tiếng Trung / tiếng Anh
   sót lại không — bước kiểm tra key không phát hiện được lỗi đó.
