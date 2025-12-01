# Edtronaut Dashboard — SWE Intern Take-home Assignment

> **Bài làm cho vòng Software Engineer Intern – Front-End.**

Dự án được xây dựng bằng **Next.js 15 (App Router)**, **React 19** và **Tailwind CSS**. Đây là một Dashboard mô phỏng nền tảng học tập với đầy đủ các tính năng theo dõi tiến độ, phân tích kỹ năng và gợi ý lộ trình học tập.

🔗 **Live Demo:** [https://edtronaut-dashboard.vercel.app/dashboard](https://edtronaut-dashboard.vercel.app/dashboard)

---

##  Tech Stack

Dự án sử dụng các công nghệ hiện đại nhất để đảm bảo hiệu suất, tính mở rộng và trải nghiệm người dùng tối ưu.

| Công nghệ | Mục đích sử dụng |
| :--- | :--- |
| **Next.js 15 (App Router)** | Framework chính (Full-stack capabilities) |
| **React 19** | UI Logic (Client & Server Components) |
| **TypeScript** | Static typing, đảm bảo type-safe |
| **Tailwind CSS** | Styling nhanh, nhất quán, Responsive |
| **Context API** | Quản lý Global State (Theme, Simulation Detail) |
| **Jest + RTL** | Unit Testing cho các component quan trọng |
| **Date-fns** | Xử lý logic ngày tháng |
| **Vercel Fonts (Geist)** | Typography hiện đại |
| **Turbopack** | Dev bundler tốc độ cao |

---

##  Tính năng hoàn thành

Dưới đây là danh sách các yêu cầu của đề bài đã được hiện thực hóa:

### 1. Header Snapshot
- [x] Hiển thị Avatar user.
- [x] Thống kê nhanh: Minutes studied, Streak, Days studied.
- [x] Responsive mượt mà trên mọi kích thước màn hình.

### 2. Activity Summary
- [x] Tổng hợp số phút học và ngày học.
- [x] Tính toán Streak tự động.
- [x] Tương thích hoàn toàn với Dark Mode.

### 3. Activity Heatmap
- [x] Heatmap dạng GitHub style.
- [x] Grid hiển thị từ Thứ 2 → Chủ Nhật (5–6 tuần gần nhất).
- [x] Màu sắc thay đổi theo cường độ hoạt động.
- [x] Hỗ trợ scroll ngang trên mobile.
- [x] Animation nhẹ cho Logo Edtronaut.

### 4. Skills Section
- [x] Hiển thị danh sách kỹ năng.
- [x] Highlight kỹ năng đang được chọn.
- [x] Lọc Simulation dựa theo Skill.
- [x] Tự động tìm Skill yếu nhất (lowest score).

### 5. Recommendation Engine
- [x] Hệ thống gợi ý dựa trên **Weakest Skill**.
- [x] Kết hợp gợi ý cả Simulation và Job relevant.
- [x] Giải thích ngữ cảnh "Tại sao được gợi ý".
- [x] Giới hạn hiển thị tối đa 5 items với unique keys.

### 6. Simulation Section
- [x] Phân chia 3 trạng thái: **Đang làm**, **Hoàn thành**, **Chưa bắt đầu**.
- [x] Accordion có thể Collapse / Expand.
- [x] Hiển thị số lượng bài tập từng nhóm.
- [x] Card thông tin chi tiết: Progress, Last Activity, Difficulty.

### 7. Simulation Detail Drawer
- [x] Panel trượt (Drawer) khi click vào Simulation Card.
- [x] Hiển thị chi tiết: Title, Company, Role, Difficulty, Skills, Timeline steps.
- [x] Hỗ trợ nút đóng và Dark mode.

### 8. Portfolio Section
- [x] Danh sách các mô phỏng đã hoàn thành.
- [x] Chức năng UI: "Tải chứng chỉ", "Chia sẻ LinkedIn".
- [x] Sử dụng **Toast UI** báo thành công 
### 9. Theme & UX
- [x] **Theme Switcher:** Chuyển đổi Light / Dark mode (lưu state bằng Context).
- [x] **Responsive:**
    - Cột phải (Recommendations) sticky trên desktop.
    - Cột trái scroll độc lập.
    - Grid minmax chống vỡ UI.
    - Tối ưu tốt cho Mobile.


## 🚀 Cài đặt và Chạy dự án

Đảm bảo đã cài đặt Node.js trên máy.

**1. Clone project và cài đặt dependencies:**
pnpm install

**2. Chạy môi trường Development:** 
pnpm dev
---

##  Testing

Dự án đã thiết lập môi trường test với **Jest** và **React Testing Library**. Các file test bao gồm:
1.  `RecommendationCard.test.tsx`
2.  `useRecommendations.test.ts`
3.  `filterSimulations.test.ts`

Để chạy test:
```bash
pnpm test
