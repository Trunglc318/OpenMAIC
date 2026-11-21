> Bản dịch / biên soạn cho bản tiếng Việt, dựa trên bản tiếng Anh gốc, chưa phải tài liệu chính thức của upstream.

# OpenMAIC — Lớp học tương tác đa tác nhân

OpenMAIC (Open Multi-Agent Interactive Classroom) là nền tảng học tập
mã nguồn mở, biến một chủ đề hoặc một tài liệu thành một lớp học tương tác.
Bạn chỉ cần mô tả chủ đề hoặc tải tài liệu lên, AI sẽ tạo dàn ý, slide,
bài kiểm tra, mô phỏng tương tác và hoạt động học theo dự án (PBL).
Trong lớp học, giảng viên AI và bạn học AI có thể giảng bài, thảo luận,
vẽ lên bảng trắng và đọc lời giảng thành tiếng.

Bản này là fork của THU-MAIC/OpenMAIC, giấy phép MIT.
Giao diện đã có tiếng Việt (`vi-VN`). Tài liệu này viết cho người dùng
Việt Nam tự cài đặt và tự vận hành.

## Tính năng chính

- **Tạo bài học bằng một cú nhấp chuột** — Nhập chủ đề hoặc đính kèm
  tài liệu, AI tạo toàn bộ bài học trong vài phút.
- **Lớp học đa tác nhân** — Giảng viên AI và bạn học AI giảng bài,
  thảo luận và tương tác với bạn theo thời gian thực.
- **Nhiều loại cảnh** — Slide, bài kiểm tra (quiz), trang tương tác
  HTML, mô phỏng, trò chơi, bản đồ tư duy và học theo dự án (PBL).
- **Bảng trắng và giọng đọc** — Tác nhân AI vẽ sơ đồ, viết công thức
  và giải thích bằng giọng nói.
- **Chỉnh sửa bằng AI** — Sửa từng slide, viết lại lời giảng,
  sửa trang tương tác, sắp xếp lại thứ tự trang.
- **Agent Workbench** — Trò chuyện với agent để lập kế hoạch chuỗi bài,
  tạo và sửa toàn bộ khóa học, nhập slide `.pptx`.
- **Kho kiến thức** — Tài liệu tải lên được lưu, sắp xếp theo thư mục
  và nhắc tới bằng `@` trong cuộc trò chuyện.
- **Xuất bài học** — Xuất `.pptx` giữ đủ các cảnh, xuất một file
  `.html` ngoại tuyến phát toàn bộ bài học, hoặc xuất lớp học dạng ZIP
  để chuyển sang một bản triển khai khác. Có thể xuất video MP4
  qua dịch vụ kết xuất (render service) nếu đã cấu hình.
- **Lưu trữ phía máy chủ** — Khóa học lưu trên PostgreSQL, tạo bài
  vẫn tiếp tục ngay cả khi bạn đóng tab trình duyệt.
- **Hỗ trợ nhiều nhà cung cấp model** — OpenAI, Anthropic, Google Gemini,
  DeepSeek, Qwen, Kimi, MiniMax, GLM, Doubao, OpenRouter, Ollama
  (chạy local) và các API tương thích OpenAI.

## Yêu cầu trước khi cài

- **Node.js** >= 22.19
- **pnpm** >= 10
- **PostgreSQL** 16 — khóa học lưu trên máy chủ. Khi chạy local,
  `pnpm db:up` sẽ khởi động một PostgreSQL bằng Docker cho bạn.
- Một API key của ít nhất một nhà cung cấp model (xem mục dưới).
- Docker, nếu bạn muốn triển khai bằng Docker thay vì chạy trực tiếp.
  Xem thêm trong `packages/docs/content/docs/deployment.vi.mdx`.

## Quick Start

### 1. Clone và cài đặt

```bash
git clone https://github.com/Trunglc318/OpenMAIC.git
cd OpenMAIC
pnpm install
```

### 2. Cấu hình

```bash
cp .env.example .env.local            # API key và tùy chọn máy chủ
cp openmaic.example.yml openmaic.yml  # chọn model cho từng slot
```

File mẫu chỉ cần `OPENAI_API_KEY` trong `.env.local`
(hoặc đổi provider sang một provider bạn đã có key).
Mọi thứ khác trong file đều đang được comment, chỉ bật khi bạn cần.
Key nằm trong `.env.local` và được tham chiếu trong `openmaic.yml`
dạng `${VAR}`, ví dụ `apiKey: ${OPENAI_API_KEY}`.

### 3. Khởi động database

```bash
pnpm db:up
```

### 4. Chạy

```bash
pnpm dev
```

Mở trình duyệt và vào địa chỉ mà terminal in ra (mặc định là
`http://localhost:3000`, nếu cổng đã bị chiếm thì xem lại log).

### 5. Build cho production

```bash
pnpm build
pnpm start
```

Chi tiết đầy đủ xem trong
`packages/docs/content/docs/getting-started.vi.mdx`.

## Cấu hình khuyên dùng cho người Việt

`openmaic.yml` khai báo **providers** (tài khoản máy chủ có thể gọi)
và **slots** (mỗi việc dùng AI — dàn ý, nội dung slide, giọng đọc,
tìm kiếm web… — dùng model nào). Người dùng có thể đổi model trong
cài đặt của app, trừ khi bạn khóa slot đó lại (`lock`) hoặc đặt
`allowUserKeys: false`.

Ví dụ tối thiểu, theo file `openmaic.example.yml` gốc:

```yaml
providers:
  openai:
    preset: openai
    apiKey: ${OPENAI_API_KEY}
    models: [gpt-5.5]

slots:
  llm: openai:gpt-5.5
```

### Ưu tiên provider nào?

1. **OpenAI, Google Gemini, Anthropic trước** — dùng được ở Việt Nam,
   tài liệu tiếng Anh đầy đủ, model mặc định trong file mẫu là
   `openai:gpt-5.5`.
2. **DeepSeek qua OpenRouter là lựa chọn rẻ** — nếu bạn muốn tiết kiệm
   chi phí, có thể dùng DeepSeek qua OpenRouter thay vì key DeepSeek
   trực tiếp. Kiểm tra lại tên model trong danh sách model được phép
   của provider đó trước khi lưu cấu hình, vì tên model thay đổi
   theo thời gian.
3. **Chạy local: Ollama / Lemonade** — không cần API key, dữ liệu
   không rời khỏi máy của bạn, nhưng cần máy đủ mạnh và chất lượng
   bài tạo ra thường thấp hơn model cloud. Phù hợp để thử nghiệm
   hoặc dùng offline.

Các provider Trung Quốc như DeepSeek, Qwen, Kimi, MiniMax, GLM,
Doubao, Xiaomi MiMo, Tencent cũng có trong danh sách hỗ trợ, nhưng
một số dùng endpoint `.cn`, cần tài khoản / số điện thoại Trung Quốc
hoặc tài liệu tiếng Trung. Người dùng Việt Nam chỉ nên dùng khi đã
quen với provider đó.

Chi tiết xem trong
`packages/docs/content/docs/configuration.vi.mdx`.

## Giọng đọc và nhận dạng giọng nói tiếng Việt

### Giọng đọc (TTS)

- **VoxCPM2 hỗ trợ tiếng Việt.** Đây là model TTS đa ngôn ngữ
  (30 ngôn ngữ, trong đó có tiếng Việt), có thể chạy local,
  hỗ trợ nhân bản giọng (voice cloning) và tự tạo giọng.
  Trong `.env.example`, VoxCPM2 được cấu hình qua
  `TTS_VOXCPM_BASE_URL` (mặc định local là `http://localhost:8000/v1`).
- Ngoài ra còn có TTS của OpenAI, Google Gemini, MiniMax, Qwen,
  Doubao, Xiaomi, DeepSeek. Hãy nghe thử một đoạn tiếng Việt có dấu
  trước khi chọn giọng mặc định cho lớp học.

### Nhận dạng giọng nói (ASR)

- **Lưu ý quan trọng:** checkpoint gốc **Fun-ASR-Nano-2512 chỉ hỗ trợ
  tiếng Trung, tiếng Anh và tiếng Nhật** (cùng phương ngữ Trung Quốc).
  Muốn nhận dạng **tiếng Việt bằng FunASR local**, cần dùng checkpoint
  riêng **Fun-ASR-MLT-Nano-2512** (31 ngôn ngữ, trong đó có tiếng Việt),
  không phải checkpoint Nano gốc.
- Đường cloud đã hỗ trợ tiếng Việt rõ ràng hơn: **Azure STT**
  và **OpenAI Whisper** đều hỗ trợ `vi-VN`. Đây là lựa chọn an toàn
  hơn nếu bạn cần học sinh nói tiếng Việt trong lớp thảo luận,
  nhưng cần key và trả phí theo mức dùng.
- Trước khi dùng trong lớp thật, hãy kiểm thử: cho một người đọc
  một đoạn tiếng Việt, xem bản chép lời có giữ đúng dấu và từ
  chuyên môn không.

## Tìm kiếm web

Khi tạo bài, OpenMAIC có thể tìm trên web để lấy thông tin mới nhất
trước khi viết bài. **Khuyên dùng Tavily hoặc Brave cho người Việt**,
vì Baidu / Bocha thiên về nguồn Trung Quốc và kém cho truy vấn
tiếng Việt, nguồn Việt (sách giáo khoa, Bộ GD&ĐT, tài liệu Việt Nam).

Trong `openmaic.yml`, slot tìm kiếm là `webSearch`, ví dụ:

```yaml
slots:
  webSearch: tavily
```

Bạn cần đặt `TAVILY_API_KEY` (hoặc key của provider tìm kiếm bạn chọn)
trong `.env.local` và khai báo provider đó trong `openmaic.yml`.

## Xuất bài học

- **PPTX** — Giữ đủ các cảnh, trang tương tác và bài kiểm tra có
  slide kèm mã QR.
- **HTML ngoại tuyến** — Một file tự phát toàn bộ bài học, có hoặc
  không có lời dẫn và video. File có lời dẫn sẽ lớn hơn và mở chậm hơn.
- **Classroom ZIP** — Cấu trúc bài học + file phương tiện, để chuyển
  sang một bản triển khai khác.
- **Video MP4** — Qua render service, nếu đã cấu hình.

## Chi phí — đọc trước khi dùng

- OpenMAIC là mã nguồn mở, **không thu phí bản thân phần mềm**,
  nhưng **LLM, TTS, hình ảnh, video và tìm kiếm web đều tính phí
  theo mức dùng của nhà cung cấp** (tính bằng USD).
- Bạn cần **thẻ quốc tế** để mua key của OpenAI / Google / Anthropic
  và các provider cloud khác. Không có thanh toán bằng MoMo / VNPay
  trong repo này, và bản demo `open.maic.chat` không phải là bản
  bạn tự host.
- Trước khi tạo nhiều khóa học, hãy tạo thử một khóa học ngắn,
  xem hóa đơn của provider, rồi mới quyết định ngân sách.
  Tài liệu này **không ghi giá cụ thể**, vì giá thay đổi theo
  nhà cung cấp và theo thời gian — hãy xem bảng giá chính thức
  của provider bạn chọn.

## Tài liệu tiếng Việt

- Bắt đầu: `packages/docs/content/docs/getting-started.vi.mdx`
- Cấu hình: `packages/docs/content/docs/configuration.vi.mdx`
- Triển khai: `packages/docs/content/docs/deployment.vi.mdx`

Tài liệu gốc tiếng Anh nằm trong `packages/docs/content/docs/`
(không có hậu tố ngôn ngữ), tài liệu tiếng Trung có hậu tố
`.zh-cn.mdx` / `.zh-tw.mdx`. Khi bản Việt và bản Anh khác nhau,
hãy lấy bản Anh làm chuẩn.

## Đóng góp và giấy phép

- Giấy phép: MIT. Xem file `LICENSE`.
- Đóng góp: xem `CONTRIBUTING.md` (tiếng Anh).
- Báo lỗi: mở issue trên repo gốc, mô tả bằng tiếng Anh kèm
  các bước tái hiện, phiên bản và log lỗi (che key trước khi gửi).

## Giới hạn cần biết

- Nội dung bài học do AI tạo ra — **luôn kiểm tra lại trước khi
  dùng trong lớp thật**, nhất là số liệu, công thức, ngày tháng
  và thuật ngữ chuyên môn.
- Chất lượng giọng đọc / nhận dạng tiếng Việt phụ thuộc vào
  provider và model bạn chọn, chưa được kiểm chứng đầy đủ
  theo mọi cấu hình trong tài liệu này.
- Tài liệu tiếng Việt này chưa phải tài liệu chính thức của upstream.
