# D.A.S · Truy tìm cổ vật

Mobile PWA triển khai từ file Figma D.A.S Major Project, repo riêng hoàn toàn với các sản phẩm Atok.

- Thiết kế: https://www.figma.com/design/EqSQkCp4lndukmWrpfSjBk/D.A.S---Major-Project?node-id=5431-21615
- Khung mục tiêu iPhone 17 Pro Max: **440 × 956 CSS px**; thu tỷ lệ trên màn nhỏ, căn giữa trên desktop.
- Sáu entry point: `?flow=onboarding`, `tutorial`, `museum`, `scan`, `collection`, `profile`. Nút menu góc trên mở danh sách các flow.
- 70 màn hình/trạng thái nguồn. `design-source/flows.json` giữ node, trigger, timing, easing và đích chuyển màn; `hotspots.json` giữ vùng tương tác.
- Source React, CSS và PWA nằm trong `src/`, `public/`. Các module trình bày được chuyển từ design context bằng `scripts/prepare-design.mjs`, ghép cùng router và behavior riêng. UnoCSS biên dịch CSS lúc build; không có Tailwind runtime hay dependency Tailwind.
- Tài nguyên Figma được tải và lưu bền vững trong repo. Link tạm chỉ còn trong hồ sơ thiết kế, không được dùng ở runtime.

## Build và triển khai

GitHub Actions cài dependency, khóa phiên bản bằng `package-lock.json`, tải asset qua curl, build, kiểm tra 6 flow và toàn bộ màn hình trên Chromium, rồi deploy GitHub Pages. Không cần cài dependency hoặc build trên máy người dùng.

Các lệnh cho môi trường cloud: `npm ci`, `npm run build`, `npm test`, `npm run test:browser`. Báo cáo và screenshot nằm trong artifact `das-mobile-qa` của mỗi workflow.

## Phạm vi demo

Camera/nhận diện cổ vật, phần thưởng, dữ liệu tài khoản và huy hiệu là mô phỏng theo prototype. Không có backend nhận diện hoặc đăng nhập thật. Tên được lưu trong localStorage trên thiết bị; không gửi lên server. Hai video reward do người dùng cung cấp. Chuyển màn dùng timing và easing Figma; chữ xuất hiện có stagger và hỗ trợ giảm chuyển động.

PWA có manifest và service worker cho shell, màn hình và ảnh offline sau lượt tải hoàn tất. Video stream cần mạng ở lần tải đầu và không cam kết offline video theo byte range trên Safari. Cài trên iPhone bằng Safari → Chia sẻ → Thêm vào MH chính.

Một số liên kết trong prototype trỏ ra ngoài trang Final Prototype hoặc chỉ có phím Space. Bản demo bổ sung điều hướng 4 tab, quay lại, menu 6 flow và nút bỏ qua. Bảo tàng Vũng Tàu/chưa có trang nội dung riêng dùng chung trang chi tiết demo; không thể hiện là dữ liệu dịch vụ thật.

Font và hình ảnh thuộc thiết kế nguồn của người dùng; repo không tự cấp giấy phép sử dụng lại cho bên thứ ba.
