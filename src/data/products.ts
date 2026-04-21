// Product Data Centralized
export interface Product {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  image: string;
  desc: string;
  specs: Record<string, string>;
  details?: Record<string, string>;
  gallery?: string[];
}

export const LED_PRODUCTS: Product[] = [
  // Màn hình LED
  { 
    id: 'led-in-1', 
    category: 'display',
    subcategory: 'Indoor',
    name: 'Module LED uốn dẻo P3.076 Indoor GKGD SMD2020', 
    image: '/assets/products/LED/Indoor/Module-LED-uon-deo-P3.076-Indoor-GKGD-SMD2020.png',
    desc: 'Giải pháp LED linh hoạt với khả năng tạo hình đa dạng, màu sắc trung thực và độ bền công nghiệp vượt trội.',
    specs: { pixelPitch: 'P3.076', brightness: '800 nits', warranty: '24 Tháng' },
    details: {
      'Pixel Pitch': '3.076mm',
      'LED Type': 'SMD2020',
      'Brightness': '800 nits',
      'Refresh Rate': '≥1920Hz',
      'Scan Mode': '1/32',
      'Module Size': '240x120mm',
      'Lifespan': '100,000 Hours'
    }
  },
  { id: 'ctrl-1', category: 'control', subcategory: 'Controller', name: 'Card nhận LED KR3208', image: '/assets/products/LED/Controller/Card nhận LED KR3208.png', desc: 'Card nhận tín hiệu LED ổn định, hỗ trợ độ phân giải cao.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 'ctrl-2', category: 'control', subcategory: 'Controller', name: 'Card nhận LED H8s', image: '/assets/products/LED/Controller/Card-nhan-LED-H8s.png', desc: 'Card nhận tín hiệu LED thế hệ mới, tích hợp nhiều tính năng thông minh.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 'ctrl-3', category: 'control', subcategory: 'Controller', name: 'Card nhận LED KR7508', image: '/assets/products/LED/Controller/Card-nhan-LED-KR7508.png', desc: 'Hiệu năng cao, tương thích với nhiều dòng module LED.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 'ctrl-4', category: 'control', subcategory: 'Controller', name: 'Card nhận LED KR7512', image: '/assets/products/LED/Controller/Card-nhan-LED-KR7512.png', desc: 'Hỗ trợ quản lý dải màu rộng, hiển thị mượt mà.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 'ctrl-5', category: 'control', subcategory: 'Controller', name: 'Card nhận LED KR7516', image: '/assets/products/LED/Controller/Card-nhan-LED-KR7516.png', desc: 'Card nhận cao cấp, tối ưu cho màn hình kích thước lớn.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 'ctrl-6', category: 'control', subcategory: 'Controller', name: 'Card phát LED Kommander ES2-2', image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES2-2.png', desc: 'Card phát tín hiệu ổn định, dễ dàng cấu hình.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'ctrl-7', category: 'control', subcategory: 'Controller', name: 'Card phát LED Kommander ES2', image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES2.png', desc: 'Giải pháp phát nội dung LED chuyên nghiệp.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'ctrl-8', category: 'control', subcategory: 'Controller', name: 'Card phát LED Kommander ES4-2', image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES4-2.png', desc: 'Card phát 4 cổng, hỗ trợ quản lý diện tích lớn.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'ctrl-9', category: 'control', subcategory: 'Controller', name: 'Card phát LED Kommander ES4', image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES4.png', desc: 'Dòng ES4 hiệu năng cao, tích hợp sẵn nhiều cổng kết nối.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'proc-1', category: 'control', subcategory: 'Video Processor', name: 'Bộ xử lý hình ảnh 2-in-1 KLS12C', image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS12C.png', desc: 'Xử lý hình ảnh 4K, tích hợp card phát 2 trong 1.', specs: { pixelPitch: '4K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'proc-2', category: 'control', subcategory: 'Video Processor', name: 'Bộ xử lý hình ảnh 2-in-1 KLS16C', image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS16C.png', desc: 'Xử lý đa luồng, hỗ trợ ghép nhiều màn hình.', specs: { pixelPitch: '4K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'proc-3', category: 'control', subcategory: 'Video Processor', name: 'Bộ xử lý hình ảnh 2-in-1 KLS24C', image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS24C.png', desc: 'Dòng cao cấp nhất, độ trễ cực thấp.', specs: { pixelPitch: '4K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'proc-4', category: 'control', subcategory: 'Video Processor', name: 'Bộ xử lý hình ảnh 2-in-1 KLS2C', image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS2C.png', desc: 'Nhỏ gọn, mạnh mẽ, phù hợp cho sự kiện vừa và nhỏ.', specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'proc-5', category: 'control', subcategory: 'Video Processor', name: 'Bộ xử lý hình ảnh 2-in-1 KLS4C', image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS4C.png', desc: 'Hỗ trợ nhiều ngõ vào tín hiệu, chuyển cảnh mượt mà.', specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'proc-6', category: 'control', subcategory: 'Video Processor', name: 'Bộ xử lý hình ảnh 2-in-1 KLS6C', image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS6C.png', desc: 'Xử lý hình ảnh sắc nét, màu sắc sống động.', specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'proc-7', category: 'control', subcategory: 'Video Processor', name: 'Bộ xử lý hình ảnh 2-in-1 KLS8C', image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS8C.png', desc: 'Tối ưu cho màn hình LED quảng cáo cố định.', specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 'pand-1', category: 'control', subcategory: 'Pandora Box', name: 'Pandora Box KPB12', image: '/assets/products/LED/Controller/Pandora-Box-KPB12.png', desc: 'Hệ thống quản lý nội dung LED qua Cloud, điều khiển từ xa linh hoạt.', specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
];

export const LCD_PRODUCTS: Product[] = [
  {
    id: 'wall-1',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: 'VNSIGN G32LA – Màn hình LCD 32 inch',
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G32LA – Màn hình LCD 32 inch.png',
    desc: 'Màn hình quảng cáo treo tường siêu mỏng, viền tinh tế, hoạt động bền bỉ.',
    specs: { size: '32 inch', brightness: '450 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': '32 inch',
      'Độ phân giải': '1920 x 1080 (Full HD)',
      'Độ sáng': '450 cd/m²',
      'Tỷ lệ tương phản': '1200:1',
      'Hệ điều hành': 'Android 11 / Windows (Tùy chọn)',
      'Góc nhìn': '178°/178°',
      'Thời gian đáp ứng': '6ms'
    }
  },
  {
    id: 'wall-2',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: 'VNSIGN G32LB – Màn hình LCD 32 inch',
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G32LB – Màn hình LCD 32 inch.png',
    desc: 'Thiết kế hiện đại, độ phân giải Full HD, phù hợp cho thang máy và cửa hàng.',
    specs: { size: '32 inch', brightness: '450 cd/m²', warranty: '24 Tháng' }
  },
  {
    id: 'wall-3',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: 'VNSIGN G43LA – Màn hình LCD 43 inch',
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G43LA – Màn hình LCD 43 inch.png',
    desc: 'Kích thước phổ biến cho các điểm bán lẻ, hiển thị màu sắc trung thực.',
    specs: { size: '43 inch', brightness: '500 cd/m²', warranty: '24 Tháng' }
  },
  {
    id: 'wall-4',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: 'VNSIGN G43LB – Màn hình LCD 43 inch',
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G43LB – Màn hình LCD 43 inch.png',
    desc: 'Hiệu năng cao, tiết kiệm điện năng, quản lý tập trung qua Cloud CMS.',
    specs: { size: '43 inch', brightness: '500 cd/m²', warranty: '24 Tháng' }
  },
  {
    id: 'wall-5',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: 'VNSIGN G50LA – Màn hình LCD 50 inch',
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G50LA – Màn hình LCD 50 inch.png',
    desc: 'Màn hình khổ trung bình, lý tưởng cho sảnh chờ và hành lang.',
    specs: { size: '50 inch', brightness: '500 cd/m²', warranty: '24 Tháng' }
  },
  {
    id: 'wall-6',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: 'VNSIGN G55LA – Màn hình LCD 55 inch',
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G55LA – Màn hình LCD 55 inch.png',
    desc: 'Độ sáng cao, thu hút ánh nhìn từ xa, hỗ trợ phát 4K mượt mà.',
    specs: { size: '55 inch', brightness: '500 cd/m²', warranty: '24 Tháng' }
  },
  {
    id: 'stand-1',
    category: 'man-hinh-standee',
    subcategory: 'Màn hình standee',
    name: 'VNSIGN S43L – Standee Điện Tử 43 inch',
    image: '/assets/products/LCD/man-hinh-standee/VNSIGN S43L – Standee Điện Tử 43 inch.png',
    desc: 'Màn hình standee đứng hiện đại, thu hút sự chú ý tại sảnh TTTM, khách sạn.',
    specs: { size: '43 inch', brightness: '500 cd/m²', warranty: '24 Tháng' }
  }
];

export const ALL_DATA: Product[] = [...LED_PRODUCTS, ...LCD_PRODUCTS];
