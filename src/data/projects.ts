// Projects Data Centralized
export interface Project {
  id: string;
  tag: { vi: string, en: string };
  tagColor: string;
  title: { vi: string, en: string };
  model: { vi: string, en: string };
  image: string;
  location: { vi: string, en: string };
  desc: { vi: string, en: string };
  challenge: { vi: string, en: string };
  solution: { vi: string, en: string };
  overview: { vi: string, en: string };
  specs: { vi: string, en: string }[];
  result: { vi: string, en: string };
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sun-group',
    tag: { vi: 'Doanh nghiệp', en: 'Enterprise' },
    tagColor: 'accent',
    title: { 
      vi: 'AEON BETA Vincom Royal Island', 
      en: 'AEON BETA Vincom Royal Island' 
    },
    model: { 
      vi: 'Enterprise · Giải trí', 
      en: 'Enterprise · Entertainment' 
    },
    image: '/assets/case-studies/AEON-BETA/IMG/Screenshot 2026-04-22 003612.png ',
    location: { vi: 'Vũ Yên', en: 'Vu Yen' },
    desc: { 
      vi: 'Tại Vincom Royal Island, hệ thống rạp chiếu phim AEON BETA Cinemas yêu cầu một giải pháp hiển thị hiện đại nhằm nâng cao trải nghiệm khách hàng ngay từ khu vực sảnh.',
      en: 'At Vincom Royal Island, AEON BETA Cinemas requires a modern display solution to enhance customer experience right from the lobby.'
    },
    challenge: {
      vi: 'Yêu cầu cao về kỹ thuật, nắm rõ bức tranh tổng quan về thiết kế, đọc được bản vẽ xây dựng.',
      en: 'High technical requirements, understanding the overall design, and reading construction drawings.'
    },
    solution: {
      vi: 'Sử dụng màn hình LG để đảm bảo chất lượng. Cài đặt On-Premise để đảm bảo phát liên tục.',
      en: 'Used LG screens for quality. On-Premise installation to ensure continuous broadcasting.'
    },
    overview: {
      vi: 'Tại Vincom Royal Island, hệ thống rạp chiếu phim AEON BETA Cinemas yêu cầu một giải pháp hiển thị hiện đại nhằm nâng cao trải nghiệm khách hàng ngay từ khu vực sảnh.',
      en: 'At Vincom Royal Island, AEON BETA Cinemas requires a modern display solution to enhance customer experience right from the lobby.'
    },
    specs: [
      { vi: 'Hệ thống màn hình chuyên dụng LG High-Brightness', en: 'LG High-Brightness professional screen system' },
      { vi: 'Giải pháp quản lý nội dung On-Premise bảo mật cao', en: 'High-security On-Premise content management solution' },
      { vi: 'Khả năng vận hành 24/7 trong điều kiện môi trường biển', en: '24/7 operation capability in marine environments' },
      { vi: 'Tích hợp đồng bộ với hệ thống âm thanh và ánh sáng', en: 'Synchronized integration with sound and lighting' }
    ],
    result: {
      vi: 'Hệ thống đã đi vào hoạt động ổn định, góp phần tạo nên những trải nghiệm thị giác mãn nhãn cho khách hàng.',
      en: 'The system has been operating stably, contributing to eye-catching visual experiences for customers.'
    },
    featured: true,
  },
  {
    id: 'toco-toco',
    tag: { vi: 'Chuỗi cửa hàng', en: 'Chain Store' },
    tagColor: 'brand',
    title: { 
      vi: 'AEON BETA – Vincom Smart City', 
      en: 'AEON BETA – Vincom Smart City' 
    },
    model: { 
      vi: 'Enterprise · Giải trí', 
      en: 'Enterprise · Entertainment' 
    },
    image: '/assets/case-studies/AEON-BETA/IMG/z7520683894147_0bd90845c4c1311798efe7477cd7bba0.jpg',
    location: { vi: 'Hà Nội', en: 'Hanoi' },
    desc: { 
      vi: 'Tại Vincom Smart City, AEON BETA Cinemas tiếp tục mở rộng hệ thống với yêu cầu đồng bộ trải nghiệm hiển thị giữa các cụm rạp.',
      en: 'At Vincom Smart City, AEON BETA Cinemas continues to expand with the requirement to synchronize display experiences across cinema clusters.'
    },
    challenge: {
      vi: 'Số lượng điểm triển khai lớn, yêu cầu quản lý nội dung tập trung và đồng bộ theo thời gian thực.',
      en: 'Large number of deployment points, requiring centralized and synchronized content management in real-time.'
    },
    solution: {
      vi: 'Sử dụng phần mềm VNSIGN Cloud để quản lý tập trung. Màn hình chuyên dụng 24/7.',
      en: 'Used VNSIGN Cloud software for centralized management. 24/7 professional screens.'
    },
    overview: {
      vi: 'Tại Vincom Smart City, AEON BETA Cinemas tiếp tục mở rộng hệ thống với yêu cầu đồng bộ trải nghiệm hiển thị giữa các cụm rạp.',
      en: 'At Vincom Smart City, AEON BETA Cinemas continues to expand with the requirement to synchronize display experiences across cinema clusters.'
    },
    specs: [
      { vi: 'Hệ thống Menu Board điện tử 43–49 inch', en: '43–49 inch digital Menu Board system' },
      { vi: 'Phần mềm quản lý nội dung VNSIGN Cloud', en: 'VNSIGN Cloud content management software' },
      { vi: 'Cập nhật giá và chương trình khuyến mãi tức thì', en: 'Instant price and promotion updates' },
      { vi: 'Hỗ trợ hiển thị video 4K sắc nét', en: 'Support 4K sharp video display' }
    ],
    result: {
      vi: 'Tăng 20% doanh thu từ các món mới nhờ hình ảnh hiển thị hấp dẫn, giảm 90% chi phí in ấn menu truyền thống.',
      en: 'Increased revenue from new items by 20% thanks to attractive display, reduced menu printing costs by 90%.'
    },
    featured: true,
  },
  {
    id: 'amway',
    tag: { vi: 'Doanh nghiệp', en: 'Corporate' },
    tagColor: 'brand',
    title: { 
      vi: 'DOJI – Hệ thống cửa hàng vàng bạc', 
      en: 'DOJI – Jewelry Store Chain' 
    },
    model: { 
      vi: 'Corporate Signage · Bán lẻ', 
      en: 'Corporate Signage · Retail' 
    },
    image: '/assets/case-studies/CASE-KHAC/z7504464998053_c0c1b9a1ad9fb9cb3a4bb4a60f6a055c.jpg',
    location: { vi: 'Toàn quốc', en: 'Nationwide' },
    desc: { 
      vi: 'DOJI là thương hiệu vàng bạc đá quý lớn tại Việt Nam, yêu cầu giải pháp hiển thị vừa sang trọng vừa linh hoạt trong việc truyền tải thông tin sản phẩm và chương trình ưu đãi.',
      en: 'DOJI is a major jewelry brand in Vietnam, requiring a display solution that is both luxurious and flexible in conveying product information and promotions.'
    },
    challenge: {
      vi: 'Cần hệ thống quản lý nội dung chuyên nghiệp, hỗ trợ phân quyền quản lý theo từng khu vực.',
      en: 'Need a professional content management system with regional decentralization support.'
    },
    solution: {
      vi: 'Triển khai VNSIGN Cloud với tính năng phân quyền đa cấp. Sử dụng màn hình Samsung/LG chuyên dụng.',
      en: 'Deployed VNSIGN Cloud with multi-level decentralization. Used Samsung/LG professional screens.'
    },
    overview: {
      vi: 'DOJI là thương hiệu vàng bạc đá quý lớn tại Việt Nam, yêu cầu giải pháp hiển thị vừa sang trọng vừa linh hoạt trong việc truyền tải thông tin sản phẩm và chương trình ưu đãi.',
      en: 'DOJI is a major jewelry brand in Vietnam, requiring a display solution that is both luxurious and flexible in conveying product information and promotions.'
    },
    specs: [
      { vi: '20 màn hình chuyên dụng 55–65 inch', en: '20 professional 55–65 inch screens' },
      { vi: 'Hệ thống quản lý nội dung đám mây VNSIGN Cloud', en: 'VNSIGN Cloud content management system' },
      { vi: 'Phân quyền quản lý nội dung theo vùng miền', en: 'Regional content management decentralization' },
      { vi: 'Lập lịch phát nội dung tự động theo chiến dịch', en: 'Automatic content scheduling by campaign' }
    ],
    result: {
      vi: 'Nâng cao hình ảnh thương hiệu chuyên nghiệp, tối ưu hóa việc truyền tải thông tin sản phẩm đến khách hàng.',
      en: 'Enhanced professional brand image, optimized product information delivery to customers.'
    },
    featured: false,
  },
  {
    id: 'hospital',
    tag: { vi: 'Y tế', en: 'Healthcare' },
    tagColor: 'brand',
    title: { 
      vi: 'Nhà hàng Bếp Quán', 
      en: 'Bep Quan Restaurant' 
    },
    model: { 
      vi: 'Restaurant - F&B', 
      en: 'Restaurant - F&B' 
    },
    image: '/assets/case-studies/CASE-KHAC/z7507825042643_9c2b660644b896e963a813098cfa7dd9.jpg',
    location: { vi: 'TP.HCM', en: 'HCMC' },
    desc: { 
      vi: 'Bếp Quán là mô hình nhà hàng phục vụ ẩm thực với lượng khách đông vào giờ cao điểm, yêu cầu một giải pháp hiển thị giúp tối ưu trải nghiệm khách hàng và hỗ trợ vận hành hiệu quả.',
      en: 'Bep Quan is a restaurant model with high traffic during peak hours, requiring a display solution to optimize customer experience and support efficient operation.'
    },
    challenge: {
      vi: 'Yêu cầu nội dung quản lý tập trung, thay đổi từ xa dễ dàng với mức chi phí hợp lý.',
      en: 'Requirement for centralized content management, easy remote updates at a reasonable cost.'
    },
    solution: {
      vi: 'Smart TV hệ điều hành Android kết hợp phần mềm VNSIGN để quản lý tập trung.',
      en: 'Android Smart TVs combined with VNSIGN software for centralized management.'
    },
    overview: {
      vi: 'Bếp Quán là mô hình nhà hàng phục vụ ẩm thực với lượng khách đông vào giờ cao điểm, yêu cầu một giải pháp hiển thị giúp tối ưu trải nghiệm khách hàng và hỗ trợ vận hành hiệu quả.',
      en: 'Bep Quan is a restaurant model with high traffic during peak hours, requiring a display solution to optimize customer experience and support efficient operation.'
    },
    specs: [
      { vi: 'Hệ thống Smart TV Android', en: 'Android Smart TV system' },
      { vi: 'Phần mềm quản lý nội dung VNSIGN', en: 'VNSIGN content management software' },
      { vi: 'Quản trị nội dung từ xa qua Cloud', en: 'Remote content management via Cloud' },
      { vi: 'Hỗ trợ nhiều định dạng video và hình ảnh', en: 'Support multiple video and image formats' }
    ],
    result: {
      vi: 'Chủ động trong việc truyền thông, giảm thiểu thời gian cập nhật nội dung thủ công.',
      en: 'Proactive in communication, minimizing manual content update time.'
    },
    featured: false,
  },
  {
    id: 'tan-son-nhat-t3',
    tag: { vi: 'Vận tải', en: 'Transport' },
    tagColor: 'brand',
    title: { 
      vi: 'AEON BETA – Central Premium', 
      en: 'AEON BETA – Central Premium' 
    },
    model: { 
      vi: 'Transport Signage · Hàng không', 
      en: 'Transport Signage · Aviation' 
    },
    image: '/assets/case-studies/AEON-BETA/IMG/z7581295186031_bccaef4e30e92c1f622d90c99ebe5e0b.jpg',
    location: { vi: 'TP.HCM', en: 'HCMC' },
    desc: { 
      vi: 'Tại khu phức hợp Central Premium, AEON BETA Cinemas hướng tới mô hình rạp cao cấp với yêu cầu hiển thị nội dung sắc nét và linh hoạt.',
      en: 'At the Central Premium complex, AEON BETA Cinemas aims for a premium cinema model with requirements for sharp and flexible content display.'
    },
    challenge: {
      vi: 'Yêu cầu cao về kỹ thuật, phối hợp đối tác xây dựng tại công trường, đáp ứng tiêu chuẩn an ninh nghiêm ngặt.',
      en: 'High technical requirements, coordination with construction partners, and meeting strict security standards.'
    },
    solution: {
      vi: 'Kết hợp với các hãng công nghệ hàng đầu để triển khai giải pháp đồng bộ theo yêu cầu chủ đầu tư.',
      en: 'Cooperated with leading technology firms to deploy synchronized solutions according to requirements.'
    },
    overview: {
      vi: 'Tại khu phức hợp Central Premium, AEON BETA Cinemas hướng tới mô hình rạp cao cấp với yêu cầu hiển thị nội dung sắc nét và linh hoạt.',
      en: 'At the Central Premium complex, AEON BETA Cinemas aims for a premium cinema model with requirements for sharp and flexible content display.'
    },
    specs: [
      { vi: 'Hệ thống màn hình ghép (Video Wall) siêu mỏng', en: 'Ultra-thin Video Wall system' },
      { vi: 'Màn hình hiển thị thông tin chuyến bay (FIDS)', en: 'Flight Information Display System (FIDS)' },
      { vi: 'Hệ thống quản lý tập trung bảo mật cao', en: 'High-security centralized management system' },
      { vi: 'Tích hợp dữ liệu thời gian thực từ hệ thống điều hành bay', en: 'Real-time data integration from flight operation systems' }
    ],
    result: {
      vi: 'Góp phần hiện đại hóa hạ tầng, nâng cao trải nghiệm khách hàng và đảm bảo thông tin thông suốt 24/7.',
      en: 'Contributed to modernizing infrastructure, enhancing customer experience, and ensuring smooth info 24/7.'
    },
    featured: true,
  },
];
