/**
 * config.js
 *
 * File này chứa các biến cấu hình công khai cho ứng dụng.
 *
 * CẢNH BÁO QUAN TRỌNG:
 * - Việc đặt access_token trực tiếp vào file client-side này là KHÔNG AN TOÀN và CHỈ NÊN DÙNG CHO MỤC ĐÍCH HỌC TẬP CÁ NHÂN, CỤC BỘ.
 * - KHÔNG BAO GIỜ TRIỂN KHAI MÃ NÀY RA MÔI TRƯỜNG CÔNG CỘNG VỚI ACCESS_TOKEN THẬT!
 * - Để tích hợp Strava API một cách an toàn trong ứng dụng thực tế, bạn BẮT BUỘC phải sử dụng backend server
 * để xử lý OAuth2 và lưu trữ/làm mới các token nhạy cảm.
 */

// Client ID của ứng dụng Strava của bạn (công khai, có thể để ở đây)
export const STRAVA_CLIENT_ID = '55949';

// ID của câu lạc bộ Strava bạn muốn thống kê
// Bạn có thể tìm thấy Club ID trong URL của câu lạc bộ trên Strava (ví dụ: strava.com/clubs/YOUR_CLUB_ID)
export const STRAVA_CLUB_ID = '479705';

// *** CẢNH BÁO AN TOÀN: NÊN CÓ BACKEND ĐỂ LẤY TOKEN NÀY AN TOÀN ***
// VÌ MỤC ĐÍCH HỌC TẬP, BẠN CÓ THỂ LẤY ACCESS TOKEN CÁ NHÂN TỪ:
// 1. Vào Strava -> Settings -> My API Application
// 2. Tại đó sẽ có một Access Token được tạo sẵn cho ứng dụng của bạn.
// Hoặc bạn có thể dùng Postman/cURL để thực hiện quy trình OAuth2 và lấy token.
// TOKEN NÀY CHỈ CÓ HIỆU LỰC TRONG VÀI GIỜ VÀ KHÔNG ĐƯỢC LÀM MỚI TỰ ĐỘNG BẰNG CÁCH NÀY.
export const STRAVA_ACCESS_TOKEN = 'b2800220b4445cc2f8497ecee4c180be831d9cce'; // THAY THẾ BẰNG TOKEN CỦA BẠN!
