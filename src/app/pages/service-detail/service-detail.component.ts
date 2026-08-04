import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

interface ServiceStat {
  num: string;
  label: string;
}

interface ServiceTrend {
  year: string;
  title: string;
  desc: string;
}

interface ServiceItem {
  slug: string;
  label: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
  badgeColor: string;
  details: string[];
  stats: ServiceStat[];
  trends: ServiceTrend[];
  whyUs: string[];
  cta: string;
}

const SERVICES: Record<string, ServiceItem> = {
  ooh: {
    slug: 'ooh',
    label: 'NGOÀI TRỜI',
    title: 'OOH',
    tagline: 'Thương hiệu hiện diện 24/7 trên mọi tuyến đường',
    desc: 'Billboard, màn hình LED, hộp đèn và pano khổ lớn — NF OOH thiết kế, in ấn và thi công biển quảng cáo ngoài trời cho các chiến dịch thương hiệu trên toàn mạng lưới đường bộ.',
    image: 'assets/images/services/ooh.jpg',
    badgeColor: '#E53935',
    details: [
      'Billboard đơn diện & hai diện tại trục đường cao tốc, quốc lộ',
      'Màn hình LED outdoor P4/P6/P8 điều khiển nội dung từ xa',
      'Hộp đèn backlit, frontlit khổ lớn tại nút giao thông',
      'Pano khung thép kết cấu bền vững, chịu tải gió cấp 10',
      'In ấn flex, hiflex, decal chất lượng cao bền màu 3 năm',
      'Vận hành & bảo trì định kỳ, báo cáo uptime hàng tháng'
    ],
    stats: [
      { num: '200+', label: 'Biển đang vận hành' },
      { num: '15', label: 'Tỉnh thành phủ sóng' },
      { num: '50M+', label: 'Lượt tiếp cận/tháng' },
      { num: '98%', label: 'Uptime cam kết' }
    ],
    trends: [
      {
        year: '2026',
        title: 'Programmatic OOH — Mua biển theo dữ liệu',
        desc: 'Thay vì thuê biển cố định theo tháng, brands 2026 mua slot quảng cáo ngoài trời theo khung giờ, lưu lượng xe thực tế và dữ liệu nhân khẩu học khu vực — tối ưu ngân sách tối đa.'
      },
      {
        year: '2026',
        title: 'Dynamic LED — Một biển, nhiều thông điệp',
        desc: 'Màn hình LED outdoor thay nội dung theo thời tiết, giờ trong ngày, sự kiện địa phương. Biển sáng ban đêm thành phố vừa là quảng cáo vừa là điểm nhận diện landmark thương hiệu.'
      },
      {
        year: '2026',
        title: 'Đo lường OOH bằng AI Camera',
        desc: 'Camera AI gắn tại biển đếm lượt xem thực tế, phân tích độ tuổi và giờ cao điểm — báo cáo hiệu quả OOH chính xác như digital, thay thế ước tính lưu lượng truyền thống.'
      }
    ],
    whyUs: [
      'Vị trí độc quyền tại các trục đường cao lưu lượng Hà Nội & miền Bắc',
      'Xưởng in ấn in-house — rút ngắn thời gian sản xuất xuống 48 giờ',
      'Đội kỹ thuật thi công biển chuyên nghiệp, an toàn công trình',
      'Giám sát biển 24/7, xử lý sự cố trong 4 giờ không tính phí',
      'Cam kết hoàn tiền theo tỷ lệ nếu uptime dưới 95%'
    ],
    cta: 'Nhận báo giá biển OOH ngay'
  },

  event: {
    slug: 'event',
    label: 'SỰ KIỆN',
    title: 'EVENT',
    tagline: 'Biển bảng tạo nên dấu ấn cho mọi sự kiện',
    desc: 'Backdrop, standee, banner sự kiện, cổng chào và biển chỉ dẫn — NF OOH cung cấp toàn bộ hệ thống biển bảng in ấn và thi công phục vụ sự kiện truyền thông, lễ ra mắt và hội nghị doanh nghiệp.',
    image: 'assets/images/services/event.jpg',
    badgeColor: '#FFB300',
    details: [
      'Backdrop sân khấu khổ lớn in UV, căng khung nhôm định hình',
      'Standee, X-banner, L-banner in sắc nét, lắp ráp nhanh',
      'Cổng chào sự kiện khung thép bọc flex, hiflex chất lượng cao',
      'Biển chỉ dẫn, wayfinding hệ thống cho hội nghị, triển lãm',
      'Màn hình LED thi công tại chỗ cho sân khấu và không gian sự kiện',
      'Cho thuê & thi công trọn gói, tháo dỡ sau sự kiện'
    ],
    stats: [
      { num: '500+', label: 'Sự kiện đã phục vụ' },
      { num: '48h', label: 'Thời gian giao hàng tiêu chuẩn' },
      { num: '10.000+', label: 'Sản phẩm in/năm' },
      { num: '100%', label: 'Đúng tiến độ cam kết' }
    ],
    trends: [
      {
        year: '2026',
        title: 'Modular Display — Biển lắp ráp linh hoạt',
        desc: 'Hệ thống khung nhôm modular cho phép tái sử dụng kết cấu, chỉ thay nội dung in — giảm chi phí và rác thải vật liệu cho các thương hiệu tổ chức sự kiện định kỳ.'
      },
      {
        year: '2026',
        title: 'LED Tile tích hợp vào biển sự kiện',
        desc: 'Backdrop sự kiện kết hợp màn LED tile và in ấn tạo hiệu ứng động — thay thế màn chiếu truyền thống, phù hợp không gian ngoài trời ban ngày với độ sáng cao.'
      },
      {
        year: '2026',
        title: 'Eco Print — In ấn thân thiện môi trường',
        desc: 'Mực in gốc nước, vật liệu tái chế và decal không PVC đang được các thương hiệu lớn yêu cầu cho sự kiện nhằm đạt mục tiêu ESG và trách nhiệm xã hội doanh nghiệp.'
      }
    ],
    whyUs: [
      'Xưởng in khổ lớn in-house, không phụ thuộc đối tác ngoài',
      'Giao hàng nhanh 24–48 giờ cho đơn khẩn, kể cả cuối tuần',
      'Đội thi công lắp đặt tại chỗ toàn quốc theo yêu cầu',
      'Tư vấn thiết kế trực tiếp nếu khách chưa có artwork',
      'Hỗ trợ bảo quản và tái sử dụng biển cho sự kiện lần sau'
    ],
    cta: 'Báo giá biển sự kiện ngay'
  },

  decor: {
    slug: 'decor',
    label: 'KHÔNG GIAN',
    title: 'DECOR',
    tagline: 'Biển hiệu và signage định hình nhận diện không gian thương hiệu',
    desc: 'Biển hiệu mặt tiền, hộp đèn nội thất, biển pha lê, chữ nổi inox và hệ thống signage tổng thể — NF OOH thiết kế và thi công toàn bộ hệ thống biển bảng nhận diện thương hiệu cho showroom, văn phòng và mặt bằng bán lẻ.',
    image: 'assets/images/services/decor.jpg',
    badgeColor: '#E53935',
    details: [
      'Biển hiệu mặt tiền: chữ nổi inox, mica, LED hắt sáng',
      'Hộp đèn nội thất, lightbox căng vải in UV siêu mỏng',
      'Biển pha lê, biển alu composite khắc laser CNC',
      'Chữ nổi 3D inox đánh bóng, sơn tĩnh điện màu thương hiệu',
      'Hệ thống wayfinding và biển chỉ dẫn nội khu',
      'Thi công lắp đặt, bảo hành 12 tháng sau bàn giao'
    ],
    stats: [
      { num: '300+', label: 'Công trình biển hiệu' },
      { num: '50+', label: 'Thương hiệu chuỗi đã làm' },
      { num: '12', label: 'Tháng bảo hành' },
      { num: '5', label: 'Ngày thi công trung bình' }
    ],
    trends: [
      {
        year: '2026',
        title: 'Illuminated Signage — Biển sáng thông minh',
        desc: 'Hộp đèn LED edge-lit siêu mỏng và chữ nổi backlit tích hợp cảm biến ánh sáng tự động điều chỉnh độ sáng — tiết kiệm 40% điện năng so với đèn huỳnh quang truyền thống.'
      },
      {
        year: '2026',
        title: 'Brand Consistency — Đồng bộ nhận diện chuỗi',
        desc: 'Các thương hiệu chuỗi bán lẻ, F&B và ngân hàng đang đầu tư mạnh vào hệ thống signage đồng bộ 100% giữa các điểm bán — từ màu sắc, font đến vật liệu và cách lắp đặt.'
      },
      {
        year: '2026',
        title: 'Digital Signage tích hợp vào không gian',
        desc: 'Màn hình kỹ thuật số thay thế biển tĩnh tại quầy lễ tân, khu chờ và mặt tiền showroom — cập nhật nội dung từ xa, linh hoạt theo mùa vụ và chương trình khuyến mãi.'
      }
    ],
    whyUs: [
      'Xưởng gia công CNC, cắt laser, uốn chữ inox in-house',
      'Đội ngũ thiết kế tư vấn nhận diện thương hiệu cho không gian',
      'Thi công đồng bộ hệ thống signage cho chuỗi nhiều điểm',
      'Vật liệu nhập khẩu đạt chuẩn: inox 304, mica Đài Loan, alu Đức',
      'Bảo hành 12 tháng, bảo trì định kỳ theo hợp đồng dài hạn'
    ],
    cta: 'Tư vấn hệ thống biển hiệu'
  }
};

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ServiceDetailComponent implements OnInit {
  data: ServiceItem | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.data = SERVICES[slug] ?? null;
  }

  goBack() {
    this.router.navigate(['/dich-vu']);
  }
}