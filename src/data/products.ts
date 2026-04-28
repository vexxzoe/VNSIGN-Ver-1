// Product Data Centralized
export interface Product {
  id: number;
  slug: string;
  category: string;
  subcategory: string;
  name: {
    vi: string;
    en: string;
  };
  image: string;
  description: {
    vi: string;
    en: string;
  };
  specs: Record<string, string>;
  details?: {
    [key: string]: {
      vi: string;
      en: string;
    };
  };
  gallery?: string[];
}

export const LED_PRODUCTS: Product[] = [
  // Màn hình LED
  {
    id: 41,
    slug: 'module-led-p5-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P5 Indoor', en: 'P5 Indoor LED Module' },
    image: '/assets/products/LED/Indoor/P5 Indoor GKGD.png',
    description: {
      vi: 'Module LED trong nhà pixel pitch 5mm – lý tưởng cho màn hình kích thước lớn, xem từ xa trong không gian rộng.',
      en: 'Indoor LED module with 5mm pixel pitch – ideal for large-scale displays, viewed from a distance in spacious areas.'
    },
    specs: { pixelPitch: '5mm', brightness: '≥600 cd/m²', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 5mm, xem tốt từ ≥5m • Độ sáng ≥600 cd/m² (sáng nhất dòng indoor) • Tiết kiệm điện: chỉ 8–16W/tấm • Refresh rate ≥1920Hz, hình ảnh mượt mà • Tuổi thọ ≥100,000 giờ',
        en: '• 5mm pixel pitch, optimal viewing from ≥5m • Brightness ≥600 cd/m² (brightest in indoor range) • Energy efficient: only 8–16W/panel • Refresh rate ≥1920Hz, smooth imaging • Lifespan ≥100,000 hours'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Sảnh hội nghị, hội trường lớn, trung tâm thương mại, nhà thi đấu thể thao trong nhà',
        en: 'Conference halls, large auditoriums, shopping malls, indoor sports arenas'
      },
      'Pixel': { vi: '5mm', en: '5mm' },
      'Mật độ': { vi: '40,000 dots/m²', en: '40,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD2020', en: 'SMD2020' },
      'Quét': { vi: '1/16', en: '1/16' },
      'Sáng': { vi: '≥600 cd/m²', en: '≥600 cd/m²' }
    }
  },
  {
    id: 42,
    slug: 'module-led-p4-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module Led P4 Indoor', en: 'P4 Indoor LED Module' },
    image: '/assets/products/LED/Indoor/Led P4 Indoor GKGD.png',
    description: {
      vi: 'Module LED trong nhà pixel pitch 4mm – cân bằng hoàn hảo giữa độ phân giải và chi phí, phù hợp đa dạng không gian.',
      en: 'Indoor LED module with 4mm pixel pitch – perfect balance between resolution and cost, suitable for diverse spaces.'
    },
    specs: { pixelPitch: '4mm', brightness: '≥500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 4mm, khoảng xem ≥4m • Mật độ 62,500 dots/m² – hình ảnh rõ nét • Refresh rate ≥1920Hz / ≥3840Hz (2 phiên bản) • Nhẹ 335g/tấm, dễ lắp đặt • Tiêu chuẩn ISO 9001, ISO 14001',
        en: '• 4mm pixel pitch, viewing distance ≥4m • Density 62,500 dots/m² – clear images • Refresh rate ≥1920Hz / ≥3840Hz (2 versions) • Lightweight 335g/panel, easy installation • ISO 9001, ISO 14001 standards'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Phòng họp, showroom, cửa hàng bán lẻ, trung tâm thương mại, nhà hàng khách sạn',
        en: 'Meeting rooms, showrooms, retail stores, shopping malls, restaurants and hotels'
      },
      'Pixel': { vi: '4mm', en: '4mm' },
      'Mật độ': { vi: '62,500 dots/m²', en: '62,500 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD2020', en: 'SMD2020' },
      'Quét': { vi: '1/20', en: '1/20' },
      'Sáng': { vi: '≥500 cd/m²', en: '≥500 cd/m²' }
    }
  },
  {
    id: 43,
    slug: 'module-led-p3-indoor-1920hz',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P3 Indoor (1920Hz)', en: 'P3 Indoor LED Module (1920Hz)' },
    image: '/assets/products/LED/Indoor/LED P3 Indoor GKGD 1920Hz.png',
    description: {
      vi: 'Module LED trong nhà pixel pitch 3mm tiêu chuẩn – chuẩn mực của dòng indoor, hình ảnh sắc nét, màu sắc trung thực.',
      en: 'Standard indoor LED module with 3mm pixel pitch – the benchmark for indoor displays, sharp images, and true colors.'
    },
    specs: { pixelPitch: '3mm', brightness: '≥500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 3mm, khoảng xem ≥3m • Mật độ 111,111 dots/m² • Refresh rate ≥1920Hz • LED SMD2020 độ bền cao • Công suất thấp: 7–15W/tấm • 281 tỉ màu hiển thị',
        en: '• 3mm pixel pitch, viewing distance ≥3m • Density 111,111 dots/m² • Refresh rate ≥1920Hz • High durability SMD2020 LED • Low power: 7–15W/panel • 281 billion colors'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Màn hình quảng cáo trong nhà, phòng họp, khách sạn, trung tâm mua sắm, sự kiện',
        en: 'Indoor advertising screens, meeting rooms, hotels, shopping centers, events'
      },
      'Pixel': { vi: '3mm', en: '3mm' },
      'Mật độ': { vi: '111,111 dots/m²', en: '111,111 dots/m²' },
      'Kích thước': { vi: '192×192mm', en: '192×192mm' },
      'LED': { vi: 'SMD2020', en: 'SMD2020' },
      'Quét': { vi: '1/32', en: '1/32' },
      'Sáng': { vi: '≥500 cd/m²', en: '≥500 cd/m²' }
    }
  },
  {
    id: 44,
    slug: 'module-p3-indoor-3840hz',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P3 Indoor (3840Hz)', en: 'P3 Indoor LED Module (3840Hz)' },
    image: '/assets/products/LED/Indoor/P3 indoor GKGD 3840Hz.png',
    description: {
      vi: 'Phiên bản nâng cấp của Module P3 với tốc độ làm tươi 3840Hz – loại bỏ hoàn toàn hiện tượng nhấp nháy khi quay phim.',
      en: 'Upgraded version of P3 Module with 3840Hz refresh rate – completely eliminates flickering when filming.'
    },
    specs: { pixelPitch: '3mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Refresh rate ≥3840Hz – chụp ảnh/quay phim không bị sọc • Hình ảnh cực mượt, không flicker • Cùng thông số vật lý với P3 1920Hz • Lý tưởng cho studio, sự kiện phát sóng trực tiếp • 281 tỉ màu',
        en: '• Refresh rate ≥3840Hz – photography/filming without scan lines • Ultra-smooth, no flicker • Same physical specs as P3 1920Hz • Ideal for studios, live broadcast events • 281 billion colors'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Studio truyền hình, sự kiện livestream, màn hình LED sân khấu phát sóng trực tiếp',
        en: 'TV studios, livestream events, live broadcast stage LED screens'
      },
      'Pixel': { vi: '3mm', en: '3mm' },
      'Mật độ': { vi: '111,111 dots/m²', en: '111,111 dots/m²' },
      'Kích thước': { vi: '192×192mm', en: '192×192mm' },
      'LED': { vi: 'SMD2020', en: 'SMD2020' },
      'Quét': { vi: '1/32', en: '1/32' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 45,
    slug: 'module-led-p25-indoor-1920hz',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P2.5 Indoor (1920Hz)', en: 'P2.5 Indoor LED Module (1920Hz)' },
    image: '/assets/products/LED/Indoor/LED P2.5 Indoor GKGD.png',
    description: {
      vi: 'Module LED trong nhà pixel pitch 2.5mm – độ phân giải cao, hình ảnh chi tiết rõ ràng ngay ở khoảng cách gần.',
      en: 'Indoor LED module with 2.5mm pixel pitch – high resolution, clear detailed images even at close distances.'
    },
    specs: { pixelPitch: '2.5mm', brightness: '≥500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 2.5mm, mật độ 160,000 dots/m² • Hình ảnh sắc nét từ khoảng cách ≥2.5m • Refresh rate ≥1920Hz • LED SMD1515 nhỏ gọn, góc nhìn rộng 160°×140° • Hai phiên bản: 1920Hz & 3840Hz',
        en: '• 2.5mm pixel pitch, density 160,000 dots/m² • Sharp images from distance ≥2.5m • Refresh rate ≥1920Hz • Compact SMD1515 LED, wide 160°×140° viewing angle • Two versions: 1920Hz & 3840Hz'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Phòng điều hành, trung tâm chỉ huy, triển lãm, khách sạn 4–5 sao, showroom cao cấp',
        en: 'Control rooms, command centers, exhibitions, 4–5 star hotels, luxury showrooms'
      },
      'Pixel': { vi: '2.5mm', en: '2.5mm' },
      'Mật độ': { vi: '160,000 dots/m²', en: '160,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/32', en: '1/32' },
      'Sáng': { vi: '≥500 cd/m²', en: '≥500 cd/m²' }
    }
  },
  {
    id: 46,
    slug: 'module-led-p25-indoor-3840hz',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P2.5 Indoor (3840Hz)', en: 'P2.5 Indoor LED Module (3840Hz)' },
    image: '/assets/products/LED/Indoor/LED P2.5 indoor GKGD 3840Hz.png',
    description: {
      vi: 'Phiên bản P2.5 nâng cấp với tốc độ làm tươi 3840Hz – tiêu chuẩn chuyên nghiệp cho môi trường phát sóng và trình diễn.',
      en: 'Upgraded P2.5 version with 3840Hz refresh rate – professional standard for broadcast and performance environments.'
    },
    specs: { pixelPitch: '2.5mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Refresh rate ≥3840Hz – không flicker khi ghi hình • Mật độ 160,000 dots/m² siêu nét • LED SMD1515 độ bền và màu sắc vượt trội • Phù hợp các dự án yêu cầu chất lượng hình ảnh cao nhất • Tuổi thọ ≥100,000 giờ',
        en: '• Refresh rate ≥3840Hz – no flicker when recording • Super-sharp 160,000 dots/m² density • SMD1515 LED with superior durability and color • Suitable for projects requiring the highest image quality • Lifespan ≥100,000 hours'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Studio truyền hình, sự kiện cao cấp, phòng hội nghị VIP, màn hình LED phát sóng',
        en: 'TV studios, premium events, VIP conference rooms, broadcast LED screens'
      },
      'Pixel': { vi: '2.5mm', en: '2.5mm' },
      'Mật độ': { vi: '160,000 dots/m²', en: '160,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/32', en: '1/32' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 47,
    slug: 'module-led-p2-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P2.0 Indoor', en: 'P2.0 Indoor LED Module' },
    image: '/assets/products/LED/Indoor/LED P2 Indoor GKGD.png',
    description: {
      vi: 'Module LED trong nhà pixel pitch 2mm – độ phân giải cực cao, tái hiện hình ảnh tinh tế như màn hình chuyên nghiệp.',
      en: 'Indoor LED module with 2mm pixel pitch – ultra-high resolution, rendering delicate images like professional screens.'
    },
    specs: { pixelPitch: '2mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 2mm, mật độ 250,000 dots/m² – siêu nét • Refresh rate ≥3840Hz tiêu chuẩn • Khoảng xem lý tưởng từ ≥2m • LED SMD1515, góc nhìn rộng 160°×140° • Phù hợp không gian cần hình ảnh chất lượng cao',
        en: '• 2mm pixel pitch, density 250,000 dots/m² – super sharp • Standard ≥3840Hz refresh rate • Ideal viewing distance from ≥2m • SMD1515 LED, wide 160°×140° angle • Suitable for spaces requiring high-quality imaging'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Phòng điều hành, trung tâm chỉ huy an ninh, phòng mổ trực tuyến, triển lãm công nghệ cao',
        en: 'Control rooms, security command centers, online surgery rooms, high-tech exhibitions'
      },
      'Pixel': { vi: '2mm', en: '2mm' },
      'Mật độ': { vi: '250,000 dots/m²', en: '250,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/40', en: '1/40' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 48,
    slug: 'module-p186-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module P1.86 Indoor', en: 'P1.86 Indoor LED Module' },
    image: '/assets/products/LED/Indoor/P1.86 Indoor GKGD.png',
    description: {
      vi: 'Module LED pixel pitch 1.86mm – ranh giới giữa màn hình LED và màn hình hiển thị thông thường, hình ảnh cực kỳ mịn màng.',
      en: '1.86mm pixel pitch LED module – the boundary between LED screens and regular displays, extremely smooth images.'
    },
    specs: { pixelPitch: '1.86mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 1.86mm, mật độ 288,906 dots/m² • Refresh rate ≥3840Hz • LED SMD1515 chất lượng cao • Khoảng xem tối ưu từ ≥1.86m • 281 tỉ màu, màu sắc như thật',
        en: '• 1.86mm pixel pitch, density 288,906 dots/m² • Refresh rate ≥3840Hz • High-quality SMD1515 LED • Optimal viewing distance from ≥1.86m • 281 billion colors, true-to-life colors'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Phòng hội nghị cao cấp, trung tâm chỉ huy, phòng phát sóng, điều phối giao thông',
        en: 'Premium conference rooms, command centers, broadcast rooms, traffic coordination'
      },
      'Pixel': { vi: '1.86mm', en: '1.86mm' },
      'Mật độ': { vi: '288,906 dots/m²', en: '288,906 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/43', en: '1/43' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 49,
    slug: 'module-p1667-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module P1.667 Indoor', en: 'P1.667 Indoor LED Module' },
    image: '/assets/products/LED/Indoor/P1.667 GKGD Indoor.png',
    description: {
      vi: 'Module LED pixel pitch 1.667mm – độ phân giải vượt trội, tái hiện mọi chi tiết hình ảnh với độ chính xác cao.',
      en: '1.667mm pixel pitch LED module – superior resolution, rendering every image detail with high precision.'
    },
    specs: { pixelPitch: '1.667mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 1.667mm, mật độ 360,000 dots/m² • LED SMD1212 siêu nhỏ, hình ảnh mịn • Refresh rate ≥3840Hz • Phù hợp xem gần, phân biệt từng chi tiết • Chuẩn chất lượng ISO 9001, 14001',
        en: '• 1.667mm pixel pitch, density 360,000 dots/m² • Tiny SMD1212 LED, smooth images • Refresh rate ≥3840Hz • Suitable for close viewing, detail distinction • ISO 9001, 14001 quality standards'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Phòng điều hành doanh nghiệp, trung tâm thông tin, phòng kiểm soát công nghiệp, studio',
        en: 'Corporate control rooms, information centers, industrial control rooms, studios'
      },
      'Pixel': { vi: '1.667mm', en: '1.667mm' },
      'Mật độ': { vi: '360,000 dots/m²', en: '360,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1212', en: 'SMD1212' },
      'Quét': { vi: '1/48', en: '1/48' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 50,
    slug: 'module-led-p153-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P1.53 Indoor', en: 'P1.53 Indoor LED Module' },
    image: '/assets/products/LED/Indoor/LED P1.53 Indoor GKGD.png',
    description: {
      vi: 'Module LED pixel pitch 1.53mm – giải pháp hiển thị độ nét đỉnh cao cho các ứng dụng đòi hỏi hình ảnh chi tiết tuyệt đối.',
      en: '1.53mm pixel pitch LED module – high-definition display solution for applications requiring absolute image detail.'
    },
    specs: { pixelPitch: '1.53mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 1.53mm, mật độ 422,500 dots/m² – rất cao • LED SMD1212, hình ảnh siêu mịn • Refresh rate ≥3840Hz • Độ xử lý tín hiệu 65,536 cấp • Tuổi thọ ≥100,000 giờ',
        en: '• 1.53mm pixel pitch, density 422,500 dots/m² – very high • SMD1212 LED, ultra-smooth images • Refresh rate ≥3840Hz • 65,536 levels of signal processing • Lifespan ≥100,000 hours'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Trung tâm chỉ huy quân sự/an ninh, phòng mổ trực tuyến, studio phát sóng chuyên nghiệp',
        en: 'Military/security command centers, online surgery rooms, professional broadcast studios'
      },
      'Pixel': { vi: '1.53mm', en: '1.53mm' },
      'Mật độ': { vi: '422,500 dots/m²', en: '422,500 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1212', en: 'SMD1212' },
      'Quét': { vi: '1/52', en: '1/52' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 51,
    slug: 'module-led-p125-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED P1.25 Indoor', en: 'P1.25 Indoor LED Module' },
    image: '/assets/products/LED/Indoor/màn hình LED P1.25 GKGD.png',
    description: {
      vi: 'Module LED pixel pitch 1.25mm – đỉnh cao của công nghệ LED indoor, mật độ điểm ảnh vượt trội, chất lượng hình ảnh không thua kém màn hình LCD cao cấp.',
      en: '1.25mm pixel pitch LED module – the pinnacle of indoor LED technology, superior pixel density, image quality comparable to high-end LCD screens.'
    },
    specs: { pixelPitch: '1.25mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 1.25mm, mật độ 640,000 dots/m² – cao nhất dòng • LED SMD1010 cực nhỏ • Refresh rate ≥3840Hz • Hình ảnh sắc bén, xem được từ ≥1.25m • 281 tỉ màu, chuẩn màu chuyên nghiệp',
        en: '• 1.25mm pixel pitch, density 640,000 dots/m² – highest in range • Tiny SMD1010 LED • Refresh rate ≥3840Hz • Sharp images, viewable from ≥1.25m • 281 billion colors, professional color standard'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Phòng điều hành tập đoàn, trung tâm kiểm soát quốc gia, studio phát sóng 4K, triển lãm công nghệ',
        en: 'Corporate boardrooms, national control centers, 4K broadcast studios, technology exhibitions'
      },
      'Pixel': { vi: '1.25mm', en: '1.25mm' },
      'Mật độ': { vi: '640,000 dots/m²', en: '640,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1010', en: 'SMD1010' },
      'Quét': { vi: '1/64', en: '1/64' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 53,
    slug: 'module-led-uon-deo-p3076-indoor-smd1515',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED uốn dẻo P3.076 Indoor', en: 'P3.076 Flexible Indoor LED Module' },
    image: '/assets/products/LED/Indoor/P3.076 Indoor.png',
    description: {
      vi: 'Module LED uốn dẻo pixel pitch 3.076mm dùng chip SMD1515 – nhẹ hơn, tiết kiệm điện hơn, phù hợp cho các không gian thiết kế sáng tạo.',
      en: 'Flexible LED module with 3.076mm pixel pitch using SMD1515 chips – lighter, more energy-efficient, suitable for creative design spaces.'
    },
    specs: { pixelPitch: '3.076mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Uốn cong linh hoạt tạo hình theo ý muốn • Nhẹ hơn phiên bản SMD2020 (chỉ 230g/tấm) • Tiêu thụ điện thấp hơn: 11–21W/tấm • Refresh rate ≥1920Hz • Phù hợp lắp đặt trên trần, tường cong',
        en: '• Flexible bending to create any shape • Lighter than SMD2020 version (only 230g/panel) • Lower power consumption: 11–21W/panel • Refresh rate ≥1920Hz • Suitable for ceiling or curved wall installation'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Trang trí nội thất sáng tạo, biển quảng cáo dạng cong, màn hình LED nghệ thuật trong nhà hàng/khách sạn',
        en: 'Creative interior decoration, curved advertising signs, artistic LED displays in restaurants/hotels'
      },
      'Pixel': { vi: '3.076mm', en: '3.076mm' },
      'Mật độ': { vi: '105,625 dots/m²', en: '105,625 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/26', en: '1/26' },
      'Trọng lượng': { vi: '230g', en: '230g' }
    }
  },
  {
    id: 54,
    slug: 'module-led-uon-deo-p25-indoor-p25flex',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED uốn dẻo P2.5 Indoor', en: 'P2.5 Flexible Indoor LED Module' },
    image: '/assets/products/LED/Indoor/LED uốn dẻo P2.5 Indoor GKGD.png',
    description: {
      vi: 'Module LED uốn dẻo pixel pitch 2.5mm – kết hợp độ phân giải cao và khả năng tạo hình linh hoạt, lý tưởng cho màn hình cong nghệ thuật.',
      en: 'Flexible LED module with 2.5mm pixel pitch – combining high resolution with creative flexibility, ideal for artistic curved displays.'
    },
    specs: { pixelPitch: '2.5mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Uốn cong theo nhiều chiều hướng • Mật độ 160,000 dots/m² – hình ảnh sắc nét • Hai phiên bản Refresh rate: ≥1920Hz & ≥3840Hz • LED SMD1515 màu sắc trung thực • Nhẹ 270g/tấm, dễ thi công',
        en: '• Bends in multiple directions • Density 160,000 dots/m² – sharp imaging • Two refresh rate versions: ≥1920Hz & ≥3840Hz • SMD1515 LED for true colors • Lightweight 270g/panel, easy to install'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Màn hình LED cong kiến trúc, sân khấu sự kiện, showroom ô tô, trung tâm thương mại cao cấp',
        en: 'Architectural curved LED displays, stage events, car showrooms, premium shopping centers'
      },
      'Pixel': { vi: '2.5mm', en: '2.5mm' },
      'Mật độ': { vi: '160,000 dots/m²', en: '160,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/32', en: '1/32' },
      'Trọng lượng': { vi: '270g', en: '270g' }
    }
  },
  {
    id: 55,
    slug: 'module-led-uon-deo-p2-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED uốn dẻo P2.0 Indoor', en: 'P2.0 Flexible Indoor LED Module' },
    image: '/assets/products/LED/Indoor/LED uốn dẻo P2 Indoor GKGD.png',
    description: {
      vi: 'Module LED uốn dẻo pixel pitch 2mm – độ phân giải cao nhất trong dòng flexible, hình ảnh siêu nét trên bề mặt cong bất kỳ.',
      en: 'Flexible LED module with 2mm pixel pitch – highest resolution in the flexible range, ultra-sharp images on any curved surface.'
    },
    specs: { pixelPitch: '2mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 2mm, mật độ 250,000 dots/m² – cao nhất dòng uốn dẻo • Refresh rate ≥3840Hz • LED SMD1515 độ bền cao • Uốn cong tạo hình 3D phức tạp • 281 tỉ màu',
        en: '• 2mm pixel pitch, density 250,000 dots/m² – highest in flexible range • Refresh rate ≥3840Hz • High-durability SMD1515 LED • Bends for complex 3D shapes • 281 billion colors'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Kiến trúc nội thất sang trọng, màn hình LED tương tác 3D, triển lãm nghệ thuật số, showroom VIP',
        en: 'Luxury interior architecture, 3D interactive LED screens, digital art exhibitions, VIP showrooms'
      },
      'Pixel': { vi: '2mm', en: '2mm' },
      'Mật độ': { vi: '250,000 dots/m²', en: '250,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/40', en: '1/40' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 56,
    slug: 'module-uon-deo-p186-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED uốn dẻo P1.86 Indoor', en: 'P1.86 Flexible Indoor LED Module' },
    image: '/assets/products/LED/Indoor/P1.86 Indoor GKGD.png',
    description: {
      vi: 'Module LED uốn dẻo pixel pitch 1.86mm – đỉnh cao kết hợp giữa độ phân giải cực cao và tính linh hoạt tạo hình, dành cho các dự án đặc biệt.',
      en: 'Flexible LED module with 1.86mm pixel pitch – pinnacle combination of ultra-high resolution and creative flexibility for special projects.'
    },
    specs: { pixelPitch: '1.86mm', brightness: 'N/A', warranty: '24 Tháng' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 1.86mm – độ phân giải cao nhất dòng uốn dẻo • Mật độ 288,906 dots/m² • Refresh rate ≥3840Hz • LED SMD1515 • Phù hợp bề mặt cong phức tạp, thiết kế đặc thù',
        en: '• 1.86mm pixel pitch – highest resolution in flexible range • Density 288,906 dots/m² • Refresh rate ≥3840Hz • SMD1515 LED • Suitable for complex curved surfaces and specialized designs'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Công trình nghệ thuật số cao cấp, phòng VIP khách sạn 5 sao, bảo tàng công nghệ, triển lãm quốc tế',
        en: 'High-end digital art works, VIP rooms in 5-star hotels, technology museums, international exhibitions'
      },
      'Pixel': { vi: '1.86mm', en: '1.86mm' },
      'Mật độ': { vi: '288,906 dots/m²', en: '288,906 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'LED': { vi: 'SMD1515', en: 'SMD1515' },
      'Quét': { vi: '1/43', en: '1/43' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  // Outdoor LED Module GKGD
  {
    id: 57,
    slug: 'module-p25-outdoor-3840hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P2.5 Outdoor (3840Hz)', en: 'P2.5 Outdoor LED Module (3840Hz)' },
    image: '/assets/products/LED/outdoor/Module P2.5 Outdoor GKGD 3840Hz.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 2.5mm – độ phân giải cao, hình ảnh sắc nét ngay cả dưới ánh nắng mặt trời chói chang.',
      en: 'Outdoor LED module with 2.5mm pixel pitch – high resolution, sharp imaging even under bright direct sunlight.'
    },
    specs: { pixelPitch: '2.5mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch nhỏ nhất dòng outdoor: 2.5mm\n• Độ sáng ≥4,500 cd/m² – rõ nét ngoài trời ban ngày\n• Refresh rate ≥3840Hz – không flicker khi quay phim\n• LED SMD1415, mật độ 160,000 dots/m²\n• Góc nhìn rộng H160°×V140°\n• Chuẩn ISO 9001, 14001, 13485, 45001',
        en: '• Smallest outdoor pixel pitch: 2.5mm\n• Brightness ≥4,500 cd/m² – clear in daylight\n• Refresh rate ≥3840Hz – no flicker when filming\n• SMD1415 LED, density 160,000 dots/m²\n• Wide H160°×V140° viewing angle\n• ISO 9001, 14001, 13485, 45001 certified'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Biển quảng cáo LED mặt phố cao cấp, màn hình LED sân vận động, trung tâm thương mại ngoài trời, sân bay',
        en: 'Premium street advertising, stadium LED screens, outdoor shopping malls, airports'
      },
      'Pixel': { vi: '2.5mm', en: '2.5mm' },
      'Mật độ': { vi: '160,000 dots/m²', en: '160,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Trọng lượng': { vi: '445±5g', en: '445±5g' },
      'LED': { vi: 'SMD1415', en: 'SMD1415' },
      'Quét': { vi: '1/32', en: '1/32' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 58,
    slug: 'module-p3076-outdoor-3840hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P3.076 Outdoor (3840Hz)', en: 'P3.076 Outdoor LED Module (3840Hz)' },
    image: '/assets/products/LED/outdoor/Module LED P3.076 Outdoor GKGD.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 3.076mm – cân bằng tối ưu giữa độ phân giải cao và độ bền công nghiệp cho môi trường khắc nghiệt.',
      en: 'Outdoor LED module with 3.076mm pixel pitch – optimal balance between high resolution and industrial durability for harsh environments.'
    },
    specs: { pixelPitch: '3.076mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Độ sáng ≥4,500 cd/m² – hiển thị rõ dưới nắng\n• Refresh rate ≥3840Hz\n• LED SMD1415 chịu nhiệt tốt\n• Mật độ 105,625 dots/m²\n• Khoảng xem ≥3.076m\n• Phù hợp biển quảng cáo cỡ vừa đến lớn',
        en: '• Brightness ≥4,500 cd/m² – clear under sunlight\n• Refresh rate ≥3840Hz\n• Heat-resistant SMD1415 LED\n• Density 105,625 dots/m²\n• Viewing distance ≥3.076m\n• Suitable for medium to large advertising signs'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Biển quảng cáo LED ngoài trời, màn hình sự kiện ngoài trời, bảng thông tin giao thông, khu vui chơi giải trí',
        en: 'Outdoor LED advertising, outdoor event screens, traffic information boards, amusement parks'
      },
      'Pixel': { vi: '3.076mm', en: '3.076mm' },
      'Mật độ': { vi: '105,625 dots/m²', en: '105,625 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Trọng lượng': { vi: '450±5g', en: '450±5g' },
      'LED': { vi: 'SMD1415', en: 'SMD1415' },
      'Quét': { vi: '1/13', en: '1/13' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 59,
    slug: 'module-p3-outdoor-1920hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P3 Outdoor (1920Hz)', en: 'P3 Outdoor LED Module (1920Hz)' },
    image: '/assets/products/LED/outdoor/Module P3 Outdoor GKGD.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 3mm tiêu chuẩn – lựa chọn phổ biến nhất cho màn hình LED quảng cáo ngoài trời, hiệu quả chi phí cao.',
      en: 'Standard outdoor LED module with 3mm pixel pitch – the most popular choice for outdoor LED advertising, highly cost-effective.'
    },
    specs: { pixelPitch: '3mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 3mm, xem tốt từ ≥3m\n• Độ sáng ≥4,500 cd/m²\n• Refresh rate ≥1920Hz hoặc ≥3840Hz (2 phiên bản)\n• LED SMD1415 độ bền cao\n• Mật độ 111,111 dots/m²\n• Giá thành tối ưu, phổ biến nhất thị trường',
        en: '• 3mm pixel pitch, viewing distance ≥3m\n• Brightness ≥4,500 cd/m²\n• Refresh rate ≥1920Hz or ≥3840Hz (2 versions)\n• High-durability SMD1415 LED\n• Density 111,111 dots/m²\n• Optimized cost, market-favorite'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Biển quảng cáo ngoài trời, màn hình LED tòa nhà, khu công nghiệp, trung tâm thương mại, đường phố',
        en: 'Outdoor advertising, building LED screens, industrial parks, shopping malls, streets'
      },
      'Pixel': { vi: '3mm', en: '3mm' },
      'Mật độ': { vi: '111,111 dots/m²', en: '111,111 dots/m²' },
      'Kích thước': { vi: '192×192mm', en: '192×192mm' },
      'Trọng lượng': { vi: '336±5g', en: '336±5g' },
      'LED': { vi: 'SMD1415', en: 'SMD1415' },
      'Quét': { vi: '1/16', en: '1/16' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥1920Hz/3840Hz', en: '≥1920Hz/3840Hz' }
    }
  },
  {
    id: 60,
    slug: 'module-p3-outdoor-3840hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P3 Outdoor (3840Hz)', en: 'P3 Outdoor LED Module (3840Hz)' },
    image: '/assets/products/LED/outdoor/Module P3 Outdoor GKGD 3840Hz.png',
    description: {
      vi: 'Phiên bản P3 Outdoor nâng cấp với tốc độ làm tươi 3840Hz – tiêu chuẩn chuyên nghiệp cho màn hình LED sự kiện ngoài trời và phát sóng.',
      en: 'Upgraded P3 Outdoor version with 3840Hz refresh rate – professional standard for outdoor events and broadcast LED screens.'
    },
    specs: { pixelPitch: '3mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Refresh rate ≥3840Hz – không nhấp nháy khi ghi hình\n• Độ sáng ≥4,500 cd/m²\n• Xử lý tín hiệu 65,536 cấp\n• LED SMD1415\n• Lý tưởng cho concert, sự kiện thể thao phát sóng trực tiếp\n• 281 tỉ màu',
        en: '• Refresh rate ≥3840Hz – no flickering when recording\n• Brightness ≥4,500 cd/m²\n• 65,536 signal processing levels\n• SMD1415 LED\n• Ideal for concerts, live broadcast sports events\n• 281 billion colors'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Màn hình LED sự kiện lớn ngoài trời, concert, sân vận động, lễ hội, chương trình truyền hình thực tế ngoài trời',
        en: 'Large outdoor event LED screens, concerts, stadiums, festivals, outdoor reality shows'
      },
      'Pixel': { vi: '3mm', en: '3mm' },
      'Mật độ': { vi: '111,111 dots/m²', en: '111,111 dots/m²' },
      'Kích thước': { vi: '192×192mm', en: '192×192mm' },
      'Trọng lượng': { vi: '336±5g', en: '336±5g' },
      'LED': { vi: 'SMD1415', en: 'SMD1415' },
      'Quét': { vi: '1/16', en: '1/16' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 61,
    slug: 'module-led-p4-outdoor-1920hz-3840hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P4 Outdoor (1920Hz/3840Hz)', en: 'P4 Outdoor LED Module (1920Hz/3840Hz)' },
    image: '/assets/products/LED/outdoor/Module LED P4 Outdoor GKGD.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 4mm – giải pháp hiển thị toàn màu ngoài trời phổ biến, hình ảnh sắc nét từ khoảng cách trung bình.',
      en: 'Outdoor LED module with 4mm pixel pitch – popular outdoor full-color display solution, sharp images from medium distances.'
    },
    specs: { pixelPitch: '4mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 4mm, khoảng xem ≥4m\n• Độ sáng ≥4,500 cd/m² rõ nét dưới nắng\n• Hai phiên bản refresh: 1920Hz & 3840Hz\n• LED SMD1921 bền bỉ\n• Mật độ 62,500 dots/m²\n• Giá thành cạnh tranh, dễ thi công',
        en: '• 4mm pixel pitch, viewing distance ≥4m\n• Brightness ≥4,500 cd/m² clear under sun\n• Two refresh versions: 1920Hz & 3840Hz\n• Durable SMD1921 LED\n• Density 62,500 dots/m²\n• Competitive price, easy installation'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Biển quảng cáo tòa nhà, màn hình LED sân thể thao, khu thương mại ngoài trời, bãi đỗ xe thông minh',
        en: 'Building advertising, sports field LED screens, outdoor commercial areas, smart parking lots'
      },
      'Pixel': { vi: '4mm', en: '4mm' },
      'Mật độ': { vi: '62,500 dots/m²', en: '62,500 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Trọng lượng': { vi: '435±5g', en: '435±5g' },
      'LED': { vi: 'SMD1921', en: 'SMD1921' },
      'Quét': { vi: '1/10', en: '1/10' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '1920Hz/3840Hz', en: '1920Hz/3840Hz' }
    }
  },
  {
    id: 62,
    slug: 'module-p4-outdoor-3840hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P4 Outdoor (3840Hz)', en: 'P4 Outdoor LED Module (3840Hz)' },
    image: '/assets/products/LED/outdoor/Module P4 Outdoor GKGD 3840Hz.png',
    description: {
      vi: 'Phiên bản P4 Outdoor nâng cấp 3840Hz – hình ảnh mượt mà tuyệt đối, loại bỏ hoàn toàn hiện tượng sọc khi chụp ảnh hay quay video ngoài trời.',
      en: 'Upgraded P4 Outdoor 3840Hz version – absolute smooth imaging, completely eliminates scan lines in outdoor photography or video.'
    },
    specs: { pixelPitch: '4mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Refresh rate ≥3840Hz – chuẩn quay phim chuyên nghiệp\n• Độ sáng ≥4,500 cd/m²\n• LED SMD1921 độ tin cậy cao\n• Phù hợp lắp đặt màn hình LED sự kiện ngoài trời\n• Tuổi thọ LED lâu dài, chi phí bảo trì thấp\n• Chuẩn ISO đa chứng nhận',
        en: '• Refresh rate ≥3840Hz – professional filming standard\n• Brightness ≥4,500 cd/m²\n• High reliability SMD1921 LED\n• Suitable for outdoor event LED screens\n• Long LED lifespan, low maintenance cost\n• Multi-ISO certified'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Sự kiện lễ hội ngoài trời, màn hình LED live event, quảng cáo OOH cao cấp, công viên giải trí',
        en: 'Outdoor festivals, live event LED screens, premium OOH advertising, amusement parks'
      },
      'Pixel': { vi: '4mm', en: '4mm' },
      'Mật độ': { vi: '62,500 dots/m²', en: '62,500 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Trọng lượng': { vi: '435±5g', en: '435±5g' },
      'LED': { vi: 'SMD1921', en: 'SMD1921' },
      'Quét': { vi: '1/10', en: '1/10' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 63,
    slug: 'module-led-p5-outdoor-1920hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P5 Outdoor (1920Hz)', en: 'P5 Outdoor LED Module (1920Hz)' },
    image: '/assets/products/LED/outdoor/Module LED P5 Outdoor GKGD.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 5mm – lựa chọn kinh tế cho biển quảng cáo LED cỡ lớn ngoài trời, hiển thị rõ ràng từ xa.',
      en: 'Outdoor LED module with 5mm pixel pitch – economical choice for large outdoor LED advertising, clear display from afar.'
    },
    specs: { pixelPitch: '5mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 5mm, khoảng xem ≥5m\n• Độ sáng ≥4,500 cd/m² cực cao\n• Refresh rate ≥1920Hz\n• LED SMD1921 chịu thời tiết tốt\n• Mật độ 40,000 dots/m²\n• Chi phí thi công và vật tư thấp, diện tích lớn',
        en: '• 5mm pixel pitch, viewing distance ≥5m\n• Ultra-high brightness ≥4,500 cd/m²\n• Refresh rate ≥1920Hz\n• Weather-resistant SMD1921 LED\n• Density 40,000 dots/m²\n• Low material and installation cost for large areas'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Biển quảng cáo LED đường cao tốc, mặt tiền tòa nhà lớn, sân vận động, khu công nghiệp, nhà xưởng',
        en: 'Highway LED billboards, large building facades, stadiums, industrial parks, workshops'
      },
      'Pixel': { vi: '5mm', en: '5mm' },
      'Mật độ': { vi: '40,000 dots/m²', en: '40,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Trọng lượng': { vi: '435±5g', en: '435±5g' },
      'LED': { vi: 'SMD1921', en: 'SMD1921' },
      'Quét': { vi: '1/8', en: '1/8' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥1920Hz', en: '≥1920Hz' }
    }
  },
  {
    id: 64,
    slug: 'module-p5-outdoor-3840hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P5 Outdoor (3840Hz)', en: 'P5 Outdoor LED Module (3840Hz)' },
    image: '/assets/products/LED/outdoor/Module P5 Outdoor GKGD 3840Hz.png',
    description: {
      vi: 'Phiên bản P5 Outdoor nâng cấp 3840Hz – giữ nguyên ưu thế chi phí thấp nhưng bổ sung tần số quét cao cho chất lượng hiển thị vượt trội.',
      en: 'Upgraded P5 Outdoor 3840Hz version – maintains low-cost advantage while adding high refresh rate for superior display quality.'
    },
    specs: { pixelPitch: '5mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Refresh rate ≥3840Hz – nâng cấp đáng kể so phiên bản 1920Hz\n• Độ sáng ≥4,500 cd/m²\n• Độ phù hợp sáng ≥97%\n• 281 tỉ màu\n• LED SMD1921 bền bỉ\n• Phù hợp màn hình LED quy mô lớn cần chất lượng cao hơn',
        en: '• Refresh rate ≥3840Hz – significant upgrade from 1920Hz version\n• Brightness ≥4,500 cd/m²\n• Brightness uniformity ≥97%\n• 281 billion colors\n• Durable SMD1921 LED\n• Suitable for large-scale LED screens requiring higher quality'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Biển LED đường cao tốc cao cấp, sân vận động quốc gia, quảng trường lớn, trung tâm hội nghị ngoài trời',
        en: 'Premium highway LED signs, national stadiums, large squares, outdoor convention centers'
      },
      'Pixel': { vi: '5mm', en: '5mm' },
      'Mật độ': { vi: '40,000 dots/m²', en: '40,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Trọng lượng': { vi: '435±5g', en: '435±5g' },
      'LED': { vi: 'SMD1921', en: 'SMD1921' },
      'Quét': { vi: '1/8', en: '1/8' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥3840Hz', en: '≥3840Hz' }
    }
  },
  {
    id: 65,
    slug: 'module-p6-outdoor-1920hz-3840hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P6 Outdoor (1920Hz/3840Hz)', en: 'P6 Outdoor LED Module (1920Hz/3840Hz)' },
    image: '/assets/products/LED/outdoor/Module P6 Outdoor GKGD.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 6mm – giải pháp hiển thị quảng cáo ngoài trời tầm xa, kích thước màn hình lớn với chi phí hợp lý.',
      en: 'Outdoor LED module with 6mm pixel pitch – solution for long-range outdoor advertising, large screen size with reasonable cost.'
    },
    specs: { pixelPitch: '6mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 6mm, xem tốt từ ≥6m\n• Độ sáng ≥4,500 cd/m²\n• Hai phiên bản: 1920Hz & 3840Hz\n• LED SMD1921, góc nhìn rộng H160°×V140°\n• Kích thước module 192×192mm nhỏ gọn, dễ lắp\n• Phù hợp màn hình cỡ vừa và lớn',
        en: '• 6mm pixel pitch, optimal viewing from ≥6m\n• Brightness ≥4,500 cd/m²\n• Two versions: 1920Hz & 3840Hz\n• SMD1921 LED, wide H160°×V140° angle\n• Compact 192×192mm module size, easy installation\n• Suitable for medium and large screens'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Biển quảng cáo đường phố, mặt tiền siêu thị, chợ ngoài trời, khu du lịch, khu dân cư thương mại',
        en: 'Street advertising, supermarket facades, outdoor markets, tourist areas, commercial residential areas'
      },
      'Pixel': { vi: '6mm', en: '6mm' },
      'Mật độ': { vi: '27,778 dots/m²', en: '27,778 dots/m²' },
      'Kích thước': { vi: '192×192mm', en: '192×192mm' },
      'Trọng lượng': { vi: '297±5g', en: '297±5g' },
      'LED': { vi: 'SMD1921', en: 'SMD1921' },
      'Quét': { vi: '1/8', en: '1/8' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '1920Hz/3840Hz', en: '1920Hz/3840Hz' }
    }
  },
  {
    id: 66,
    slug: 'module-led-p8-outdoor-1920hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module LED P8 Outdoor (1920Hz)', en: 'P8 Outdoor LED Module (1920Hz)' },
    image: '/assets/products/LED/outdoor/Module LED P8 Outdoor GKGD.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 8mm – lý tưởng cho màn hình LED cỡ lớn nhìn từ xa, chi phí thấp, lắp đặt nhanh chóng.',
      en: 'Outdoor LED module with 8mm pixel pitch – ideal for large-scale LED screens viewed from afar, low cost, quick installation.'
    },
    specs: { pixelPitch: '8mm', brightness: '≥4,500 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Pixel pitch 8mm, khoảng xem lý tưởng ≥8m\n• Độ sáng ≥4,500 cd/m²\n• LED SMD2727 kích thước lớn, độ bền cơ học cao\n• Công suất thấp: 11.5–23W/tấm\n• Mật độ 15,625 dots/m²\n• Phù hợp màn hình LED billboard cỡ lớn',
        en: '• 8mm pixel pitch, ideal viewing distance ≥8m\n• Brightness ≥4,500 cd/m²\n• Large SMD2727 LED, high mechanical durability\n• Low power: 11.5–23W/panel\n• Density 15,625 dots/m²\n• Suitable for large-scale LED billboard screens'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Billboard LED đường cao tốc, biển quảng cáo sân bay, cảng biển, khu công nghiệp, nhà thi đấu ngoài trời',
        en: 'Highway LED billboards, airport advertising, seaports, industrial parks, outdoor arenas'
      },
      'Pixel': { vi: '8mm', en: '8mm' },
      'Mật độ': { vi: '15,625 dots/m²', en: '15,625 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Trọng lượng': { vi: '420±5g', en: '420±5g' },
      'LED': { vi: 'SMD2727', en: 'SMD2727' },
      'Quét': { vi: '1/5', en: '1/5' },
      'Sáng': { vi: '≥4,500 cd/m²', en: '≥4,500 cd/m²' },
      'Refresh': { vi: '≥1920Hz', en: '≥1920Hz' }
    }
  },
  {
    id: 67,
    slug: 'module-p10-full-color-outdoor-smd2727-1920hz',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Module P10 Full Color Outdoor (SMD2727 – 1920Hz)', en: 'P10 Full Color Outdoor LED Module (SMD2727 – 1920Hz)' },
    image: '/assets/products/LED/outdoor/Module P10 Full Color Outdoor.png',
    description: {
      vi: 'Module LED ngoài trời pixel pitch 10mm full color – giải pháp kinh tế cho biển quảng cáo LED quy mô lớn, độ sáng siêu cao nhìn rõ mọi thời điểm.',
      en: '10mm pixel pitch full-color outdoor LED module – economical solution for large-scale LED billboards, ultra-high brightness visible at all times.'
    },
    specs: { pixelPitch: '10mm', brightness: '≥6,000 cd/m²', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Độ sáng ≥6,000 cd/m² – cao nhất trong dòng outdoor GKGD\n• Full color SMD 3in1 1R1G1B\n• LED SMD2727 kích thước lớn, bền bỉ\n• Khoảng xem từ xa (≥10m)\n• Phụ kiện đầy đủ kèm theo (giăng cao su, dây, vít)\n• Chi phí thấp nhất, phổ biến nhất cho billboard cỡ lớn',
        en: '• Brightness ≥6,000 cd/m² – highest in GKGD outdoor range\n• Full color SMD 3in1 1R1G1B\n• Large SMD2727 LED, durable\n• Long-range viewing (≥10m)\n• Complete accessories included (rubber gasket, wires, screws)\n• Lowest cost, most popular for large billboards'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Billboard LED đường phố lớn, biển quảng cáo cao tốc, mặt tiền công trình, sân vận động, bến xe, ga tàu',
        en: 'Large street LED billboards, highway ads, building facades, stadiums, bus stations, train stations'
      },
      'Pixel': { vi: '10mm', en: '10mm' },
      'Mật độ': { vi: '10,000 dots/m²', en: '10,000 dots/m²' },
      'Kích thước': { vi: '320×160mm', en: '320×160mm' },
      'Số tấm/m²': { vi: '20 tấm/m²', en: '20 panels/m²' },
      'LED': { vi: 'SMD2727', en: 'SMD2727' },
      'Quét': { vi: '1/2', en: '1/2' },
      'Sáng': { vi: '≥6,000 cd/m²', en: '≥6,000 cd/m²' },
      'Refresh': { vi: '1920Hz', en: '1920Hz' }
    }
  },
  {
    id: 68,
    slug: 'cabin-man-hinh-led-p391-outdoor',
    category: 'display',
    subcategory: 'Outdoor',
    name: { vi: 'Cabin màn hình LED P3.91 Outdoor (sự kiện chuyên nghiệp)', en: 'P3.91 Outdoor LED Screen Cabin (Professional Events)' },
    image: '/assets/products/LED/outdoor/Cabin màn hình LED P3.91 Outdoor.png',
    description: {
      vi: 'Cabin màn hình LED P3.91 ngoài trời – giải pháp màn hình sự kiện chuyên nghiệp, lắp ráp nhanh, di chuyển dễ dàng, hình ảnh sắc nét sống động.',
      en: 'Outdoor P3.91 LED screen cabin – professional event display solution, fast assembly, easy mobility, sharp and vivid images.'
    },
    specs: { pixelPitch: '3.91mm', brightness: '', warranty: '' },
    details: {
      'Ưu điểm nổi bật': {
        vi: '• Thiết kế cabin dạng khung nhôm – lắp ghép nhanh không cần công cụ\n• Pixel pitch 3.91mm, module 250×250mm\n• Độ sáng cao, hiển thị tốt ngoài trời\n• Nhẹ, dễ vận chuyển và lắp dựng cho sự kiện\n• Hình ảnh sắc nét, màu sắc trung thực\n• Phù hợp cho thuê màn hình LED sự kiện',
        en: '• Aluminum frame cabin design – quick assembly without tools\n• 3.91mm pixel pitch, 250×250mm module\n• High brightness, good outdoor visibility\n• Lightweight, easy to transport and set up for events\n• Sharp images, true colors\n• Suitable for event LED screen rentals'
      },
      'Ứng dụng tiêu biểu': {
        vi: 'Concert, lễ hội âm nhạc, hội chợ triển lãm, sự kiện thể thao ngoài trời, lễ kỷ niệm, hội nghị ngoài trời',
        en: 'Concerts, music festivals, trade fairs, outdoor sports events, anniversaries, outdoor conferences'
      },
      'Pixel': { vi: '3.91mm', en: '3.91mm' },
      'Module': { vi: '250×250mm', en: '250×250mm' },
      'Dạng': { vi: 'Cabin khung nhôm rental', en: 'Rental aluminum frame cabin' },
      'Môi trường': { vi: 'Outdoor', en: 'Outdoor' },
      'Ứng dụng': { vi: 'Màn hình LED sự kiện thuê', en: 'Event LED screen rental' }
    }
  },
  {
    id: 1,
    slug: 'module-led-uon-deo-p3-indoor',
    category: 'display',
    subcategory: 'Indoor',
    name: { vi: 'Module LED uốn dẻo P3.076 Indoor SMD2020', en: 'P3.076 Flexible Indoor LED Module SMD2020' },
    image: '/assets/products/LED/Indoor/P3.076 Indoor.png',
    description: {
      vi: 'Giải pháp LED linh hoạt với khả năng tạo hình đa dạng, màu sắc trung thực và độ bền công nghiệp vượt trội.',
      en: 'Flexible LED solution with diverse shaping capabilities, true colors, and superior industrial durability.'
    },
    specs: { pixelPitch: 'P3.076', brightness: '800 nits', warranty: '24 Tháng' },
    details: {
      'Pixel Pitch': { vi: '3.076mm', en: '3.076mm' },
      'LED Type': { vi: 'SMD2020', en: 'SMD2020' },
      'Brightness': { vi: '800 nits', en: '800 nits' },
      'Refresh Rate': { vi: '≥1920Hz', en: '≥1920Hz' },
      'Scan Mode': { vi: '1/32', en: '1/32' },
      'Module Size': { vi: '240x120mm', en: '240x120mm' },
      'Lifespan': { vi: '100,000 Hours', en: '100,000 Hours' }
    }
  },
  { id: 2, slug: 'card-nhan-led-kr3208', category: 'control', subcategory: 'Controller', name: { vi: 'Card nhận LED KR3208', en: 'KR3208 LED Receiving Card' }, image: '/assets/products/LED/Controller/Card nhận LED KR3208.png', description: { vi: 'Card nhận tín hiệu LED ổn định, hỗ trợ độ phân giải cao.', en: 'Stable LED receiving card supporting high resolution.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 3, slug: 'card-nhan-led-h8s', category: 'control', subcategory: 'Controller', name: { vi: 'Card nhận LED H8s', en: 'H8s LED Receiving Card' }, image: '/assets/products/LED/Controller/Card-nhan-LED-H8s.png', description: { vi: 'Card nhận tín hiệu LED thế hệ mới, tích hợp nhiều tính năng thông minh.', en: 'Next-generation LED receiving card with integrated smart features.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 4, slug: 'card-nhan-led-kr7508', category: 'control', subcategory: 'Controller', name: { vi: 'Card nhận LED KR7508', en: 'KR7508 LED Receiving Card' }, image: '/assets/products/LED/Controller/Card-nhan-LED-KR7508.png', description: { vi: 'Hiệu năng cao, tương thích với nhiều dòng module LED.', en: 'High performance, compatible with many LED module ranges.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 5, slug: 'card-nhan-led-kr7512', category: 'control', subcategory: 'Controller', name: { vi: 'Card nhận LED KR7512', en: 'KR7512 LED Receiving Card' }, image: '/assets/products/LED/Controller/Card-nhan-LED-KR7512.png', description: { vi: 'Hỗ trợ quản lý dải màu rộng, hiển thị mượt mà.', en: 'Supports wide color gamut management, smooth display.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 6, slug: 'card-nhan-led-kr7516', category: 'control', subcategory: 'Controller', name: { vi: 'Card nhận LED KR7516', en: 'KR7516 LED Receiving Card' }, image: '/assets/products/LED/Controller/Card-nhan-LED-KR7516.png', description: { vi: 'Card nhận cao cấp, tối ưu cho màn hình kích thước lớn.', en: 'Premium receiving card optimized for large-scale screens.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '12 Tháng' } },
  { id: 7, slug: 'card-phat-led-kommander-es2-2', category: 'control', subcategory: 'Controller', name: { vi: 'Card phát LED Kommander ES2-2', en: 'Kommander ES2-2 LED Sending Card' }, image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES2-2.png', description: { vi: 'Card phát tín hiệu ổn định, dễ dàng cấu hình.', en: 'Stable sending card, easy to configure.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 8, slug: 'card-phat-led-kommander-es2', category: 'control', subcategory: 'Controller', name: { vi: 'Card phát LED Kommander ES2', en: 'Kommander ES2 LED Sending Card' }, image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES2.png', description: { vi: 'Giải pháp phát nội dung LED chuyên nghiệp.', en: 'Professional LED content sending solution.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 9, slug: 'card-phat-led-kommander-es4-2', category: 'control', subcategory: 'Controller', name: { vi: 'Card phát LED Kommander ES4-2', en: 'Kommander ES4-2 LED Sending Card' }, image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES4-2.png', description: { vi: 'Card phát 4 cổng, hỗ trợ quản lý diện tích lớn.', en: '4-port sending card, supports large area management.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 10, slug: 'card-phat-led-kommander-es4', category: 'control', subcategory: 'Controller', name: { vi: 'Card phát LED Kommander ES4', en: 'Kommander ES4 LED Sending Card' }, image: '/assets/products/LED/Controller/Card-phat-LED-Kommander-ES4.png', description: { vi: 'Dòng ES4 hiệu năng cao, tích hợp sẵn nhiều cổng kết nối.', en: 'High-performance ES4 series, integrated with multiple connection ports.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 11, slug: 'bo-xu-ly-hinh-anh-kls12c', category: 'control', subcategory: 'Video Processor', name: { vi: 'Bộ xử lý hình ảnh 2-in-1 KLS12C', en: 'KLS12C 2-in-1 Video Processor' }, image: '/assets/products/LED/Video Processor/KSL12C.png', description: { vi: 'Xử lý hình ảnh 4K, tích hợp card phát 2 trong 1.', en: '4K image processing, integrated 2-in-1 sending card.' }, specs: { pixelPitch: '4K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 12, slug: 'bo-xu-ly-hinh-anh-kls16c', category: 'control', subcategory: 'Video Processor', name: { vi: 'Bộ xử lý hình ảnh 2-in-1 KLS16C', en: 'KLS16C 2-in-1 Video Processor' }, image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS16C.png', description: { vi: 'Xử lý đa luồng, hỗ trợ ghép nhiều màn hình.', en: 'Multi-stream processing, supports multi-screen stitching.' }, specs: { pixelPitch: '4K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 13, slug: 'bo-xu-ly-hinh-anh-kls24c', category: 'control', subcategory: 'Video Processor', name: { vi: 'Bộ xử lý hình ảnh 2-in-1 KLS24C', en: 'KLS24C 2-in-1 Video Processor' }, image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS24C.png', description: { vi: 'Dòng cao cấp nhất, độ trễ cực thấp.', en: 'Highest-end series, ultra-low latency.' }, specs: { pixelPitch: '4K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 14, slug: 'bo-xu-ly-hinh-anh-kls2c', category: 'control', subcategory: 'Video Processor', name: { vi: 'Bộ xử lý hình ảnh 2-in-1 KLS2C', en: 'KLS2C 2-in-1 Video Processor' }, image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS2C.png', description: { vi: 'Nhỏ gọn, mạnh mẽ, phù hợp cho sự kiện vừa và nhỏ.', en: 'Compact, powerful, suitable for small and medium events.' }, specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 15, slug: 'bo-xu-ly-hinh-anh-kls4c', category: 'control', subcategory: 'Video Processor', name: { vi: 'Bộ xử lý hình ảnh 2-in-1 KLS4C', en: 'KLS4C 2-in-1 Video Processor' }, image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS4C.png', description: { vi: 'Hỗ trợ nhiều ngõ vào tín hiệu, chuyển cảnh mượt mà.', en: 'Supports multiple signal inputs, smooth transitions.' }, specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 16, slug: 'bo-xu-ly-hinh-anh-kls6c', category: 'control', subcategory: 'Video Processor', name: { vi: 'Bộ xử lý hình ảnh 2-in-1 KLS6C', en: 'KLS6C 2-in-1 Video Processor' }, image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS6C.png', description: { vi: 'Xử lý hình ảnh sắc nét, màu sắc sống động.', en: 'Sharp image processing, vivid colors.' }, specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 17, slug: 'bo-xu-ly-hinh-anh-kls8c', category: 'control', subcategory: 'Video Processor', name: { vi: 'Bộ xử lý hình ảnh 2-in-1 KLS8C', en: 'KLS8C 2-in-1 Video Processor' }, image: '/assets/products/LED/Video Processor/Bo-xu-ly-hinh-anh-2-in-1-KLS8C.png', description: { vi: 'Tối ưu cho màn hình LED quảng cáo cố định.', en: 'Optimized for fixed advertising LED screens.' }, specs: { pixelPitch: '2K', brightness: 'N/A', warranty: '24 Tháng' } },
  { id: 18, slug: 'pandora-box-kpb12', category: 'control', subcategory: 'Pandora Box', name: { vi: 'Pandora Box KPB12', en: 'Pandora Box KPB12' }, image: '/assets/products/LED/Controller/Pandora-Box-KPB12.png', description: { vi: 'Hệ thống quản lý nội dung LED qua Cloud, điều khiển từ xa linh hoạt.', en: 'Cloud-based LED content management system, flexible remote control.' }, specs: { pixelPitch: 'N/A', brightness: 'N/A', warranty: '24 Tháng' } },
];

export const LCD_PRODUCTS: Product[] = [
  {
    id: 19,
    slug: 'vnsign-g32la-man-hinh-lcd-32-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G32LA – Màn hình LCD 32 inch', en: 'VNSIGN G32LA – 32 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G32LA – Màn hình LCD 32 inch.png',
    description: {
      vi: 'Màn hình quảng cáo treo tường siêu mỏng, viền tinh tế, hoạt động bền bỉ.',
      en: 'Ultra-thin wall-mounted advertising screen, elegant bezel, durable operation.'
    },
    specs: { size: '32 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '32 inch', en: '32 inch' },
      'Độ phân giải': { vi: '1920 x 1080 (Full HD)', en: '1920 x 1080 (Full HD)' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1100:1 và hiển thị 16.7 triệu màu', en: '1100:1 and 16.7 million colors display' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Bộ nhớ trong': { vi: '16GB', en: '16GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm loa 8Ω, công suất 5W x 2', en: 'includes 8Ω speakers, 5W x 2 output' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' },
      'Kích thước máy': { vi: '712 x 409 x 57 mm', en: '712 x 409 x 57 mm' },
      'Trọng lượng': { vi: '10 kg', en: '10 kg' }
    }
  },
  {
    id: 20,
    slug: 'vnsign-g32lb-man-hinh-lcd-32-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G32LB – Màn hình LCD 32 inch', en: 'VNSIGN G32LB – 32 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G32LB – Màn hình LCD 32 inch.png',
    description: {
      vi: 'Thiết kế hiện đại, độ phân giải Full HD, phù hợp cho thang máy và cửa hàng.',
      en: 'Modern design, Full HD resolution, suitable for elevators and retail stores.'
    },
    specs: { size: '32 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '32 inch', en: '32 inch' },
      'Độ phân giải': { vi: '1366 x 768', en: '1366 x 768' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1200:1', en: '1200:1' },
      'Hệ điều hành': { vi: 'Android 12', en: 'Android 12' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm 2 loa công suất 10W mỗi loa', en: 'includes 2 speakers, 10W each' },
      'Các cổng kết nối': { vi: 'Các cổng kết nối đa dạng như RJ45, 2 cổng USB, RS232, 2 cổng HDMI và cổng Audio In/Out', en: 'Diverse ports including RJ45, 2x USB, RS232, 2x HDMI, and Audio In/Out' },
      'Kích thước máy': { vi: '719 x 412.2 x 69.7 mm', en: '719 x 412.2 x 69.7 mm' },
      'Trọng lượng': { vi: '3.13 kg', en: '3.13 kg' }
    }
  },
  {
    id: 21,
    slug: 'vnsign-g43la-man-hinh-lcd-43-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G43LA – Màn hình LCD 43 inch', en: 'VNSIGN G43LA – 43 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G43LA – Màn hình LCD 43 inch.png',
    description: {
      vi: 'Kích thước phổ biến cho các điểm bán lẻ, hiển thị màu sắc trung thực.',
      en: 'Popular size for retail outlets, displaying realistic colors.'
    },
    specs: { size: '43 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '43 inch', en: '43 inch' },
      'Độ phân giải': { vi: '1920 x 1080 (Full HD)', en: '1920 x 1080 (Full HD)' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1100:1 và hiển thị 16.7 triệu màu', en: '1100:1 and 16.7 million colors display' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm loa 8Ω, công suất 5W x 2', en: 'includes 8Ω speakers, 5W x 2 output' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' },
      'Kích thước máy': { vi: '954 x 543 x 57 mm', en: '954 x 543 x 57 mm' },
      'Trọng lượng': { vi: '16 kg', en: '16 kg' }
    }
  },
  {
    id: 22,
    slug: 'vnsign-g43lb-man-hinh-lcd-43-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G43LB – Màn hình LCD 43 inch', en: 'VNSIGN G43LB – 43 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G43LB – Màn hình LCD 43 inch.png',
    description: {
      vi: 'Hiệu năng cao, tiết kiệm điện năng, quản lý tập trung qua Cloud CMS.',
      en: 'High performance, energy-saving, centralized management via Cloud CMS.'
    },
    specs: { size: '43 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '43 inch', en: '43 inch' },
      'Độ phân giải': { vi: '1920 x 1080 (Full HD)', en: '1920 x 1080 (Full HD)' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1200:1', en: '1200:1' },
      'Hệ điều hành': { vi: 'Android 12', en: 'Android 12' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm 2 loa công suất 10W mỗi loa', en: 'includes 2 speakers, 10W each' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' },
      'Kích thước máy': { vi: '954.5 x 555.9 x 71.6 mm', en: '954.5 x 555.9 x 71.6 mm' },
      'Trọng lượng': { vi: '5.15 kg', en: '5.15 kg' }
    }
  },
  {
    id: 23,
    slug: 'vnsign-g50la-man-hinh-lcd-50-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G50LA – Màn hình LCD 50 inch', en: 'VNSIGN G50LA – 50 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G50LA – Màn hình LCD 50 inch.png',
    description: {
      vi: 'Màn hình khổ trung bình, lý tưởng cho sảnh chờ và hành lang.',
      en: 'Medium-sized screen, ideal for lobbies and hallways.'
    },
    specs: { size: '50 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '50 inch', en: '50 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1100:1 và hiển thị 16.7 triệu màu', en: '1100:1 and 16.7 million colors display' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm loa 8Ω, công suất 5W x 2', en: 'includes 8Ω speakers, 5W x 2 output' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' },
      'Kích thước máy': { vi: '1110 x 632 x 58 mm', en: '1110 x 632 x 58 mm' },
      'Trọng lượng': { vi: '19.5 kg', en: '19.5 kg' }
    }
  },
  {
    id: 24,
    slug: 'vnsign-g55la-man-hinh-lcd-55-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G55LA – Màn hình LCD 55 inch', en: 'VNSIGN G55LA – 55 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G55LA – Màn hình LCD 55 inch.png',
    description: {
      vi: 'Độ sáng cao, thu hút ánh nhìn từ xa, hỗ trợ phát 4K mượt mà.',
      en: 'High brightness, attracts attention from afar, supports smooth 4K playback.'
    },
    specs: { size: '55 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '55 inch', en: '55 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1100:1 và hiển thị 16.7 triệu màu', en: '1100:1 and 16.7 million colors display' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm loa 8Ω, công suất 5W x 2', en: 'includes 8Ω speakers, 5W x 2 output' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' },
      'Kích thước máy': { vi: '1225 x 699 x 58 mm', en: '1225 x 699 x 58 mm' },
      'Trọng lượng': { vi: '22 kg', en: '22 kg' }
    }
  },
  {
    id: 25,
    slug: 'vnsign-g65la-man-hinh-lcd-65-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G65LA – Màn hình LCD 65 inch', en: 'VNSIGN G65LA – 65 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G65LA – Màn hình LCD 65 inch.png',
    description: {
      vi: 'Kích thước chuẩn, hiển thị 4K sắc nét, thiết kế viền mỏng tối ưu không gian.',
      en: 'Standard size, sharp 4K display, thin bezel design for space optimization.'
    },
    specs: { size: '65 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '65 inch', en: '65 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1100:1 và hiển thị 16.7 triệu màu', en: '1100:1 and 16.7 million colors display' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm loa 8Ω, công suất 5W x 2', en: 'includes 8Ω speakers, 5W x 2 output' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' }
    }
  },
  {
    id: 26,
    slug: 'vnsign-g75la-man-hinh-lcd-75-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G75LA – Màn hình LCD 75 inch', en: 'VNSIGN G75LA – 75 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G75LA – Màn hình LCD 75 inch.png',
    description: {
      vi: 'Diện tích hiển thị lớn, độ sáng vượt trội, công nghệ chống chói cho mọi góc nhìn.',
      en: 'Large display area, superior brightness, anti-glare technology for all viewing angles.'
    },
    specs: { size: '75 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '75 inch', en: '75 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1100:1 và hiển thị 16.7 triệu màu', en: '1100:1 and 16.7 million colors display' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm loa 8Ω, công suất 5W x 2', en: 'includes 8Ω speakers, 5W x 2 output' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' },
      'Kích thước máy': { vi: '1668.2 x 948 x 66.6 mm', en: '1668.2 x 948 x 66.6 mm' }
    }
  },
  {
    id: 27,
    slug: 'vnsign-g86la-man-hinh-lcd-86-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN G86LA – Màn hình LCD 86 inch', en: 'VNSIGN G86LA – 86 inch LCD Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN G86LA – Màn hình LCD 86 inch.png',
    description: {
      vi: 'Tầm nhìn không giới hạn, độ phân giải 4K siêu nét, trình chiếu chuyên nghiệp quy mô lớn.',
      en: 'Limitless vision, ultra-sharp 4K resolution, large-scale professional presentation.'
    },
    specs: { size: '86 inch', brightness: '500 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '86 inch', en: '86 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '500 cd/m²', en: '500 cd/m²' },
      'Tỷ lệ tương phản': { vi: '1100:1 và hiển thị 16.7 triệu màu', en: '1100:1 and 16.7 million colors display' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Hệ thống âm thanh': { vi: 'bao gồm loa 8Ω, công suất 5W x 2', en: 'includes 8Ω speakers, 5W x 2 output' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 và 3.5mm audio output', en: 'RJ45 x 1, USB x 2, TF card x 1, HDMI input x 1, RS232 and 3.5mm audio output' },
      'Kích thước máy': { vi: '1919.4 x 1090.1 x 64.6 mm', en: '1919.4 x 1090.1 x 64.6 mm' }
    }
  },
  {
    id: 28,
    slug: 'vnsign-sky22sxen-man-hinh-quang-cao-lcd-22-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY22SXEN – Màn hình Quảng Cáo LCD 22 inch', en: 'VNSIGN SKY22SXEN – 22 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY22SXEN – Màn hình LCD quảng cáo chuyên dụng 22 inch.png',
    description: {
      vi: 'Màn hình quảng cáo treo tường siêu mỏng, viền tinh tế, hoạt động bền bỉ.',
      en: 'Ultra-thin wall-mounted advertising screen, elegant bezel, durable operation.'
    },
    specs: { size: '22 inch', brightness: '250 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '22 inch', en: '22 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '250 cd/m²', en: '250 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '508.2 x 305 x 61.6 mm', en: '508.2 x 305 x 61.6 mm' }
    }
  },
  {
    id: 29,
    slug: 'vnsign-sky32sxen-man-hinh-quang-cao-lcd-32-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY32SXEN – Màn hình Quảng Cáo LCD 32 inch', en: 'VNSIGN SKY32SXEN – 32 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY22SXEN – Màn hình LCD quảng cáo chuyên dụng 22 inch.png',
    description: {
      vi: 'Nhỏ gọn tinh tế, hiển thị sắc nét, giải pháp hoàn hảo cho kệ hàng và menu điện tử.',
      en: 'Compact and elegant, sharp display, perfect solution for shelves and digital menus.'
    },
    specs: { size: '32 inch', brightness: '300 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '32 inch', en: '32 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '300 cd/m²', en: '300 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '721.4 x 416.3 x 69.8 mm', en: '721.4 x 416.3 x 69.8 mm' }
    }
  },
  {
    id: 30,
    slug: 'vnsign-sky43sxen-man-hinh-quang-cao-lcd-43-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY43SXEN – Màn hình Quảng Cáo LCD 43 inch', en: 'VNSIGN SKY43SXEN – 43 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY22SXEN – Màn hình LCD quảng cáo chuyên dụng 22 inch.png',
    description: {
      vi: 'Kích thước tiêu chuẩn, thiết kế thanh lịch, tối ưu hiệu quả quảng cáo tại không gian hẹp.',
      en: 'Standard size, elegant design, optimized advertising effectiveness in narrow spaces.'
    },
    specs: { size: '43 inch', brightness: '300 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '43 inch', en: '43 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '300 cd/m²', en: '300 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '964.2 x 553.7 x 65.2 mm', en: '964.2 x 553.7 x 65.2 mm' }
    }
  },
  {
    id: 31,
    slug: 'vnsign-sky49sxen-man-hinh-quang-cao-lcd-49-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY49SXEN – Màn hình Quảng Cáo LCD 49 inch', en: 'VNSIGN SKY49SXEN – 49 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY22SXEN – Màn hình LCD quảng cáo chuyên dụng 22 inch.png',
    description: {
      vi: 'Tỉ lệ hiển thị vàng, độ sáng cao, thu hút khách hàng ngay từ cái nhìn đầu tiên.',
      en: 'Golden aspect ratio, high brightness, attracting customers at first sight.'
    },
    specs: { size: '49 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '49 inch', en: '49 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '1118.8 x 640.2 x 65.2 mm', en: '1118.8 x 640.2 x 65.2 mm' }
    }
  },
  {
    id: 32,
    slug: 'vnsign-sky55sxen-man-hinh-quang-cao-lcd-55-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY55SXEN – Màn hình Quảng Cáo LCD 55 inch', en: 'VNSIGN SKY55SXEN – 55 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY55SXEN – Màn hình LCD quảng cáo chuyên dụng 55 inch.png',
    description: {
      vi: 'Kích thước quốc dân, hình ảnh 4K sống động, hoạt động bền bỉ trong mọi môi trường.',
      en: 'Standard large size, vivid 4K images, durable operation in all environments.'
    },
    specs: { size: '55 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '55 inch', en: '55 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '1236.6 x 708.7 x 65.1 mm', en: '1236.6 x 708.7 x 65.1 mm' }
    }
  },
  {
    id: 33,
    slug: 'vnsign-sky65sxen-man-hinh-quang-cao-lcd-65-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY65SXEN – Màn hình Quảng Cáo LCD 65 inch', en: 'VNSIGN SKY65SXEN – 65 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY55SXEN – Màn hình LCD quảng cáo chuyên dụng 55 inch.png',
    description: {
      vi: 'Kích thước chuẩn, hiển thị 4K sắc nét, thiết kế viền mỏng tối ưu không gian.',
      en: 'Standard size, sharp 4K display, thin bezel design for space optimization.'
    },
    specs: { size: '65 inch', brightness: '300 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '65 inch', en: '65 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '300 cd/m²', en: '300 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '1482 x 857 x 62.7 mm', en: '1482 x 857 x 62.7 mm' }
    }
  },
  {
    id: 33,
    slug: 'vnsign-sky75sxen-man-hinh-quang-cao-lcd-75-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY75SXEN – Màn hình Quảng Cáo LCD 75 inch', en: 'VNSIGN SKY75SXEN – 75 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY55SXEN – Màn hình LCD quảng cáo chuyên dụng 55 inch.png',
    description: {
      vi: 'Trải nghiệm thị giác ấn tượng, vận hành thông minh, hỗ trợ đa dạng định dạng 4K.',
      en: 'Impressive visual experience, smart operation, supports various 4K formats.'
    },
    specs: { size: '75 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '75 inch', en: '75 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '1706.8 x 994.5 x 119.5 mm', en: '1706.8 x 994.5 x 119.5 mm' }
    }
  },
  {
    id: 34,
    slug: 'vnsign-sky85sxen-man-hinh-quang-cao-lcd-85-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY85SXEN – Màn hình Quảng Cáo LCD 85 inch', en: 'VNSIGN SKY85SXEN – 85 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY55SXEN – Màn hình LCD quảng cáo chuyên dụng 55 inch.png',
    description: {
      vi: 'Tầm nhìn không giới hạn, độ phân giải 4K siêu nét, trình chiếu chuyên nghiệp quy mô lớn.',
      en: 'Limitless vision, ultra-sharp 4K resolution, large-scale professional presentation.'
    },
    specs: { size: '85 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '85 inch', en: '85 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '1952.6 x 1142 x 118.5 mm', en: '1952.6 x 1142 x 118.5 mm' }
    }
  },
  {
    id: 33,
    slug: 'vnsign-sky98sxen-man-hinh-quang-cao-lcd-98-inch',
    category: 'man-treo-tuong',
    subcategory: 'Màn treo tường',
    name: { vi: 'VNSIGN SKY98SXEN – Màn hình Quảng Cáo LCD 98 inch', en: 'VNSIGN SKY98SXEN – 98 inch LCD Advertising Screen' },
    image: '/assets/products/LCD/man-treo-tuong/VNSIGN SKY55SXEN – Màn hình LCD quảng cáo chuyên dụng 55 inch.png',
    description: {
      vi: 'Đẳng cấp trình chiếu, kích cỡ cực đại, tạo hiệu ứng thị giác choáng ngợp và sang trọng.',
      en: 'Premium presentation, maximum size, creating an overwhelming and luxurious visual effect.'
    },
    specs: { size: '98 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '98 inch', en: '98 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' },
      'Kích thước máy': { vi: '2219.4 x 1285 x 128.8 mm', en: '2219.4 x 1285 x 128.8 mm' }
    }
  },
  {
    id: 34,
    slug: 'vnsign-sky43up-standee-dien-tu-43-inch',
    category: 'man-hinh-standee',
    subcategory: 'Màn hình standee',
    name: { vi: 'VNSIGN SKY43UP – Standee Điện Tử 43 inch', en: 'VNSIGN SKY43UP – 43 inch Electronic Standee' },
    image: '/assets/products/LCD/man-hinh-standee/VNSIGN SKY43UP – Màn hình LCD STANDEE quảng cáo chuyên dụng 43 inch.png',
    description: {
      vi: 'Kiểu dáng thanh mảnh, chân đế chắc chắn, giải pháp hiển thị tinh tế cho sảnh đón khách.',
      en: 'Slim design, sturdy base, elegant display solution for reception halls.'
    },
    specs: { size: '43 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '43 inch', en: '43 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' }
    }
  },
  {
    id: 35,
    slug: 'vnsign-sky49up-standee-dien-tu-49-inch',
    category: 'man-hinh-standee',
    subcategory: 'Màn hình standee',
    name: { vi: 'VNSIGN SKY49UP – Standee Điện Tử 49 inch', en: 'VNSIGN SKY49UP – 49 inch Electronic Standee' },
    image: '/assets/products/LCD/man-hinh-standee/VNSIGN SKY43UP – Màn hình LCD STANDEE quảng cáo chuyên dụng 43 inch.png',
    description: {
      vi: 'Kích thước cân đối, độ sáng cao, tối ưu khả năng nhận diện thương hiệu tại điểm bán.',
      en: 'Balanced size, high brightness, optimized brand recognition at point of sale.'
    },
    specs: { size: '49 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '49 inch', en: '49 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' }
    }
  },
  {
    id: 36,
    slug: 'vnsign-sky55up-standee-dien-tu-55-inch',
    category: 'man-hinh-standee',
    subcategory: 'Màn hình standee',
    name: { vi: 'VNSIGN SKY55UP – Standee Điện Tử 55 inch', en: 'VNSIGN SKY55UP – 55 inch Electronic Standee' },
    image: '/assets/products/LCD/man-hinh-standee/VNSIGN SKY43UP – Màn hình LCD STANDEE quảng cáo chuyên dụng 43 inch.png',
    description: {
      vi: 'Hiển thị sống động, thiết kế kính cường lực sang trọng, thu hút mọi ánh nhìn từ xa.',
      en: 'Vivid display, luxurious tempered glass design, attracting all eyes from afar.'
    },
    specs: { size: '55 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '55 inch', en: '55 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' }
    }
  },
  {
    id: 37,
    slug: 'vnsign-sky65up-standee-dien-tu-65-inch',
    category: 'man-hinh-standee',
    subcategory: 'Màn hình standee',
    name: { vi: 'VNSIGN SKY65UP – Standee Điện Tử 65 inch', en: 'VNSIGN SKY65UP – 65 inch Electronic Standee' },
    image: '/assets/products/LCD/man-hinh-standee/VNSIGN SKY43UP – Màn hình LCD STANDEE quảng cáo chuyên dụng 43 inch.png',
    description: {
      vi: 'Khung hình lớn ấn tượng, mặt kính tràn viền, nâng tầm đẳng cấp không gian trưng bày.',
      en: 'Impressive large frame, edge-to-edge glass, elevating the class of display spaces.'
    },
    specs: { size: '65 inch', brightness: '300 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '65 inch', en: '65 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '300 cd/m²', en: '300 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' }
    }
  },
  {
    id: 38,
    slug: 'vnsign-sky75up-standee-dien-tu-75-inch',
    category: 'man-hinh-standee',
    subcategory: 'Màn hình standee',
    name: { vi: 'VNSIGN SKY75UP – Standee Điện Tử 75 inch', en: 'VNSIGN SKY75UP – 75 inch Electronic Standee' },
    image: '/assets/products/LCD/man-hinh-standee/VNSIGN SKY43UP – Màn hình LCD STANDEE quảng cáo chuyên dụng 43 inch.png',
    description: {
      vi: 'Diện tích hiển thị cực đại, xử lý hình ảnh 4K mượt mà, tạo dấu ấn thị giác mạnh mẽ.',
      en: 'Maximum display area, smooth 4K image processing, creating a strong visual impression.'
    },
    specs: { size: '75 inch', brightness: '400 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '75 inch', en: '75 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '400 cd/m²', en: '400 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' }
    }
  },
  {
    id: 39,
    slug: 'vnsign-sky85up-standee-dien-tu-85-inch',
    category: 'man-hinh-standee',
    subcategory: 'Màn hình standee',
    name: { vi: 'VNSIGN SKY85UP – Standee Điện Tử 85 inch', en: 'VNSIGN SKY85UP – 85 inch Electronic Standee' },
    image: '/assets/products/LCD/man-hinh-standee/VNSIGN SKY43UP – Màn hình LCD STANDEE quảng cáo chuyên dụng 43 inch.png',
    description: {
      vi: 'Đẳng cấp trình chiếu, thay thế hoàn hảo cho Standee truyền thống, khẳng định vị thế thương hiệu.',
      en: 'Premium presentation, perfect replacement for traditional standees, asserting brand position.'
    },
    specs: { size: '85 inch', brightness: '400 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '85 inch', en: '85 inch' },
      'Độ phân giải': { vi: '3840 x 2160', en: '3840 x 2160' },
      'Độ sáng': { vi: '400 cd/m²', en: '400 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' }
    }
  },
  {
    id: 40,
    slug: 'vnsign-sky43up03-standee-dien-tu-43-inch',
    category: 'man-hinh-tuong-tac',
    subcategory: 'Màn hình standee',
    name: { vi: 'VNSIGN SKY43UP03 – Standee Điện Tử 43 inch', en: 'VNSIGN SKY43UP03 – 43 inch Electronic Standee' },
    image: '/assets/products/LCD/man-hinh-tuong-tac/snow-forest.png',
    description: {
      vi: 'Giải pháp thông minh cho trạm tra cứu thông tin (Kiosk), sơ đồ chỉ dẫn hoặc đặt tại khu vực đăng ký dịch vụ tự động.',
      en: 'Smart solution for information kiosks, directional maps, or automated service registration areas.'
    },
    specs: { size: '43 inch', brightness: '350 cd/m²', warranty: '24 Tháng' },
    details: {
      'Kích thước': { vi: '43 inch', en: '43 inch' },
      'Độ phân giải': { vi: '1920 x 1080', en: '1920 x 1080' },
      'Độ sáng': { vi: '350 cd/m²', en: '350 cd/m²' },
      'Hệ điều hành': { vi: 'Android 9.0', en: 'Android 9.0' },
      'CPU': { vi: '4 nhân', en: 'Quad-core' },
      'RAM': { vi: '2GB', en: '2GB' },
      'Các cổng kết nối': { vi: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1', en: 'RJ45 x 1, USB x 2, TF x 1, HDMI x 1' }
    }
  },
];

export const ALL_DATA: Product[] = [...LED_PRODUCTS, ...LCD_PRODUCTS];
