// Projects Data Centralized
export interface Project {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  model: string;
  image: string;
  location: string;
  desc: string;
  challenge: string;
  solution: string;
  overview: string;
  specs: string[];
  result: string;
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sun-group',
    tag: 'Enterprise',
    tagColor: 'accent',
    title: 'AEON BETA Vincom Royal Island',
    model: 'Enterprise · Giải trí',
    image: '/assets/case-studies/AEON-BETA/IMG/Screenshot 2026-04-22 003612.png ',
    location: 'Vũ Yên',
    desc: 'Tại Vincom Royal Island, hệ thống rạp chiếu phim AEON BETA Cinemas yêu cầu một giải pháp hiển thị hiện đại nhằm nâng cao trải nghiệm khách hàng ngay từ khu vực sảnh.',
    challenge: 'Yêu cầu cao về kỹ thuật, nắm rõ bức tranh tổng quan về thiết kế, đọc được bản vẽ xây dựng.',
    solution: 'Sử dụng màn hình LG để đảm bảo chất lượng. Cài đặt On-Premise để đảm bảo phát liên tục.',
    overview: 'Tại Vincom Royal Island, hệ thống rạp chiếu phim AEON BETA Cinemas yêu cầu một giải pháp hiển thị hiện đại nhằm nâng cao trải nghiệm khách hàng ngay từ khu vực sảnh.',
    specs: ['Hệ thống màn hình chuyên dụng LG High-Brightness', 'Giải pháp quản lý nội dung On-Premise bảo mật cao', 'Khả năng vận hành 24/7 trong điều kiện môi trường biển', 'Tích hợp đồng bộ với hệ thống âm thanh và ánh sáng'],
    result: 'Hệ thống đã đi vào hoạt động ổn định, góp phần tạo nên những trải nghiệm thị giác mãn nhãn cho du khách tại Nam đảo Phú Quốc.',
    featured: true,
  },
  {
    id: 'toco-toco',
    tag: 'Chain Store',
    tagColor: 'brand',
    title: 'AEON BETA – Vincom Smart City',
    model: 'Enterprise · Giải trí',
    image: '/assets/case-studies/AEON-BETA/IMG/z7520683894147_0bd90845c4c1311798efe7477cd7bba0.jpg',
    location: 'Hà Nội',
    desc: 'Tại Vincom Smart City, AEON BETA Cinemas tiếp tục mở rộng hệ thống với yêu cầu đồng bộ trải nghiệm hiển thị giữa các cụm rạp.',
    challenge: 'Số lượng điểm triển khai lớn, yêu cầu quản lý nội dung tập trung và đồng bộ theo thời gian thực.',
    solution: 'Sử dụng phần mềm VNSIGN Cloud để quản lý tập trung. Màn hình chuyên dụng 24/7.',
    overview: 'Tại Vincom Smart City, AEON BETA Cinemas tiếp tục mở rộng hệ thống với yêu cầu đồng bộ trải nghiệm hiển thị giữa các cụm rạp.',
    specs: ['Hệ thống Menu Board điện tử 43–49 inch', 'Phần mềm quản lý nội dung VNSIGN Cloud', 'Cập nhật giá và chương trình khuyến mãi tức thì', 'Hỗ trợ hiển thị video 4K sắc nét'],
    result: 'Tăng 20% doanh thu từ các món mới nhờ hình ảnh hiển thị hấp dẫn, giảm 90% chi phí in ấn menu truyền thống.',
    featured: true,
  },
  {
    id: 'amway',
    tag: 'Corporate',
    tagColor: 'brand',
    title: 'DOJI – Hệ thống cửa hàng vàng bạc',
    model: 'Corporate Signage · Bán lẻ',
    image: '/assets/case-studies/CASE-KHAC/z7504464998053_c0c1b9a1ad9fb9cb3a4bb4a60f6a055c.jpg',
    location: 'Toàn quốc',
    desc: 'DOJI là thương hiệu vàng bạc đá quý lớn tại Việt Nam, yêu cầu giải pháp hiển thị vừa sang trọng vừa linh hoạt trong việc truyền tải thông tin sản phẩm và chương trình ưu đãi.',
    challenge: 'Cần hệ thống quản lý nội dung chuyên nghiệp, hỗ trợ phân quyền quản lý theo từng khu vực.',
    solution: 'Triển khai VNSIGN Cloud với tính năng phân quyền đa cấp. Sử dụng màn hình Samsung/LG chuyên dụng.',
    overview: 'DOJI là thương hiệu vàng bạc đá quý lớn tại Việt Nam, yêu cầu giải pháp hiển thị vừa sang trọng vừa linh hoạt trong việc truyền tải thông tin sản phẩm và chương trình ưu đãi.',
    specs: ['20 màn hình chuyên dụng 55–65 inch', 'Hệ thống quản lý nội dung đám mây VNSIGN Cloud', 'Phân quyền quản lý nội dung theo vùng miền', 'Lập lịch phát nội dung tự động theo chiến dịch'],
    result: 'Nâng cao hình ảnh thương hiệu chuyên nghiệp, tối ưu hóa việc truyền tải thông tin sản phẩm đến khách hàng.',
    featured: false,
  },
  {
    id: 'hospital',
    tag: 'Healthcare',
    tagColor: 'brand',
    title: 'Nhà hàng Bếp Quán',
    model: 'Restaurant - F&B',
    image: '/assets/case-studies/CASE-KHAC/z7507825042643_9c2b660644b896e963a813098cfa7dd9.jpg',
    location: 'TP.HCM',
    desc: 'Bếp Quán là mô hình nhà hàng phục vụ ẩm thực với lượng khách đông vào giờ cao điểm, yêu cầu một giải pháp hiển thị giúp tối ưu trải nghiệm khách hàng và hỗ trợ vận hành hiệu quả.',
    challenge: 'Yêu cầu nội dung quản lý tập trung, thay đổi từ xa dễ dàng với mức chi phí hợp lý.',
    solution: 'Smart TV hệ điều hành Android kết hợp phần mềm VNSIGN để quản lý tập trung.',
    overview: 'Bếp Quán là mô hình nhà hàng phục vụ ẩm thực với lượng khách đông vào giờ cao điểm, yêu cầu một giải pháp hiển thị giúp tối ưu trải nghiệm khách hàng và hỗ trợ vận hành hiệu quả.',
    specs: ['Hệ thống Smart TV Android', 'Phần mềm quản lý nội dung VNSIGN', 'Quản trị nội dung từ xa qua Cloud', 'Hỗ trợ nhiều định dạng video và hình ảnh'],
    result: 'Bệnh viện chủ động trong việc truyền thông, giảm thiểu thời gian cập nhật nội dung thủ công.',
    featured: false,
  },
  {
    id: 'tan-son-nhat-t3',
    tag: 'Transport',
    tagColor: 'brand',
    title: 'AEON BETA – Central Premium',
    model: 'Transport Signage · Hàng không',
    image: '/assets/case-studies/AEON-BETA/IMG/z7581295186031_bccaef4e30e92c1f622d90c99ebe5e0b.jpg',
    location: 'TP.HCM',
    desc: 'Tại khu phức hợp Central Premium, AEON BETA Cinemas hướng tới mô hình rạp cao cấp với yêu cầu hiển thị nội dung sắc nét và linh hoạt.',
    challenge: 'Yêu cầu cao về kỹ thuật, phối hợp đối tác xây dựng tại công trường, đáp ứng tiêu chuẩn an ninh nghiêm ngặt.',
    solution: 'Kết hợp với các hãng công nghệ hàng đầu để triển khai giải pháp đồng bộ theo yêu cầu chủ đầu tư.',
    overview: 'Tại khu phức hợp Central Premium, AEON BETA Cinemas hướng tới mô hình rạp cao cấp với yêu cầu hiển thị nội dung sắc nét và linh hoạt.',
    specs: ['Hệ thống màn hình ghép (Video Wall) siêu mỏng', 'Màn hình hiển thị thông tin chuyến bay (FIDS)', 'Hệ thống quản lý tập trung bảo mật cao', 'Tích hợp dữ liệu thời gian thực từ hệ thống điều hành bay'],
    result: 'Góp phần hiện đại hóa hạ tầng nhà ga, nâng cao trải nghiệm hành khách và đảm bảo thông tin thông suốt 24/7.',
    featured: true,
  },
];
