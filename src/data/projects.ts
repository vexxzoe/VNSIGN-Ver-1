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
    title: 'Sun Group – Signature Show Phú Quốc',
    model: 'Enterprise · Giải trí',
    image: '/assets/case-studies/CASE-KHAC/z7507825021044_0ae03fb13bd52cc35a2f340b21549b91.jpg',
    location: 'Phú Quốc',
    desc: 'Tư vấn, thiết kế và thi công giải pháp digital signage cho dự án Signature Show của Sun Group ở Phú Quốc.',
    challenge: 'Yêu cầu cao về kỹ thuật, nắm rõ bức tranh tổng quan về thiết kế, đọc được bản vẽ xây dựng.',
    solution: 'Sử dụng màn hình LG để đảm bảo chất lượng. Cài đặt On-Premise để đảm bảo phát liên tục.',
    overview: 'Dự án Signature Show tại Phú Quốc là một trong những công trình trọng điểm của Sun Group, đòi hỏi sự kết hợp hoàn hảo giữa công nghệ hiển thị và nghệ thuật trình diễn.',
    specs: ['Hệ thống màn hình chuyên dụng LG High-Brightness', 'Giải pháp quản lý nội dung On-Premise bảo mật cao', 'Khả năng vận hành 24/7 trong điều kiện môi trường biển', 'Tích hợp đồng bộ với hệ thống âm thanh và ánh sáng'],
    result: 'Hệ thống đã đi vào hoạt động ổn định, góp phần tạo nên những trải nghiệm thị giác mãn nhãn cho du khách tại Nam đảo Phú Quốc.',
    featured: true,
  },
  {
    id: 'toco-toco',
    tag: 'Chain Store',
    tagColor: 'brand',
    title: 'Chuỗi trà sữa TocoToco',
    model: 'Chain Store · F&B',
    image: '/assets/case-studies/CASE-KHAC/z7517327675557_9e33cc368ea54679e73379505ae9d64b.jpg',
    location: 'Toàn quốc',
    desc: 'Triển khai hệ thống Menu Board điện tử và màn hình quảng cáo cho chuỗi cửa hàng TocoToco.',
    challenge: 'Số lượng điểm triển khai lớn, yêu cầu quản lý nội dung tập trung và đồng bộ theo thời gian thực.',
    solution: 'Sử dụng phần mềm VNSIGN Cloud để quản lý tập trung. Màn hình chuyên dụng 24/7.',
    overview: 'TocoToco là một trong những chuỗi trà sữa hàng đầu Việt Nam. Việc chuyển đổi sang Menu Board điện tử giúp tối ưu hóa quy trình vận hành.',
    specs: ['Hệ thống Menu Board điện tử 43–49 inch', 'Phần mềm quản lý nội dung VNSIGN Cloud', 'Cập nhật giá và chương trình khuyến mãi tức thì', 'Hỗ trợ hiển thị video 4K sắc nét'],
    result: 'Tăng 20% doanh thu từ các món mới nhờ hình ảnh hiển thị hấp dẫn, giảm 90% chi phí in ấn menu truyền thống.',
    featured: true,
  },
  {
    id: 'amway',
    tag: 'Corporate',
    tagColor: 'brand',
    title: 'Hệ thống chi nhánh Amway Việt Nam',
    model: 'Corporate Signage · Bán lẻ',
    image: '/assets/case-studies/CASE-KHAC/z7507825035433_2b00f9ea62f5672bf7911d0d8d541971.jpg',
    location: 'Toàn quốc',
    desc: 'Tư vấn và triển khai hệ thống digital signage cho 20 màn hình tại tất cả chi nhánh Amway trên toàn quốc.',
    challenge: 'Cần hệ thống quản lý nội dung chuyên nghiệp, hỗ trợ phân quyền quản lý theo từng khu vực.',
    solution: 'Triển khai VNSIGN Cloud với tính năng phân quyền đa cấp. Sử dụng màn hình Samsung/LG chuyên dụng.',
    overview: 'Amway Việt Nam cần giải giải pháp truyền thông nội bộ và quảng bá sản phẩm hiện đại tại các trung tâm trải nghiệm.',
    specs: ['20 màn hình chuyên dụng 55–65 inch', 'Hệ thống quản lý nội dung đám mây VNSIGN Cloud', 'Phân quyền quản lý nội dung theo vùng miền', 'Lập lịch phát nội dung tự động theo chiến dịch'],
    result: 'Nâng cao hình ảnh thương hiệu chuyên nghiệp, tối ưu hóa việc truyền tải thông tin sản phẩm đến khách hàng.',
    featured: false,
  },
  {
    id: 'hospital',
    tag: 'Healthcare',
    tagColor: 'brand',
    title: 'Bệnh viện 30/4',
    model: 'Healthcare Signage · Y tế',
    image: '/assets/case-studies/CASE-KHAC/z7507825042643_9c2b660644b896e963a813098cfa7dd9.jpg',
    location: 'TP.HCM',
    desc: 'Tư vấn, triển khai màn hình và phần mềm hiển thị tại bệnh viện 30/4 để quản lý tập trung truyền thông nội bộ.',
    challenge: 'Yêu cầu nội dung quản lý tập trung, thay đổi từ xa dễ dàng với mức chi phí hợp lý.',
    solution: 'Smart TV hệ điều hành Android kết hợp phần mềm VNSIGN để quản lý tập trung.',
    overview: 'Bệnh viện 30/4 cần hệ thống phát thông báo, hướng dẫn và truyền thông nội bộ đến bệnh nhân và nhân viên.',
    specs: ['Hệ thống Smart TV Android', 'Phần mềm quản lý nội dung VNSIGN', 'Quản trị nội dung từ xa qua Cloud', 'Hỗ trợ nhiều định dạng video và hình ảnh'],
    result: 'Bệnh viện chủ động trong việc truyền thông, giảm thiểu thời gian cập nhật nội dung thủ công.',
    featured: false,
  },
  {
    id: 'tan-son-nhat-t3',
    tag: 'Transport',
    tagColor: 'brand',
    title: 'Nhà ga T3 – Tân Sơn Nhất',
    model: 'Transport Signage · Hàng không',
    image: '/assets/case-studies/CASE-KHAC/z7504464998053_c0c1b9a1ad9fb9cb3a4bb4a60f6a055c.jpg',
    location: 'TP.HCM',
    desc: 'Tư vấn, thiết kế và thi công giải pháp digital signage tại nhà ga T3 Tân Sơn Nhất.',
    challenge: 'Yêu cầu cao về kỹ thuật, phối hợp đối tác xây dựng tại công trường, đáp ứng tiêu chuẩn an ninh nghiêm ngặt.',
    solution: 'Kết hợp với các hãng công nghệ hàng đầu để triển khai giải pháp đồng bộ theo yêu cầu chủ đầu tư.',
    overview: 'Nhà ga T3 Tân Sơn Nhất là công trình hạ tầng giao thông trọng điểm. Digital Signage đóng vai trò quan trọng trong hiển thị thông tin chuyến bay.',
    specs: ['Hệ thống màn hình ghép (Video Wall) siêu mỏng', 'Màn hình hiển thị thông tin chuyến bay (FIDS)', 'Hệ thống quản lý tập trung bảo mật cao', 'Tích hợp dữ liệu thời gian thực từ hệ thống điều hành bay'],
    result: 'Góp phần hiện đại hóa hạ tầng nhà ga, nâng cao trải nghiệm hành khách và đảm bảo thông tin thông suốt 24/7.',
    featured: true,
  },
];
