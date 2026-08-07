import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FadeInDirective } from '../../shared/directives/content.directive';
import { SeoService } from '../../shared/services/seo.service';
import { NgFor } from '@angular/common';

interface ProcessStep { num: string; title: string; desc: string; }
interface Region { label: string; cities: string[]; }
interface Stat { code: string; name: string; sub: string; value: string; }

@Component({
  selector: 'app-about',
  imports: [NgFor, FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.set({
      title: 'Giới thiệu | NF OOH',
      description: 'NF – Kết nối thương hiệu với không gian truyền thông ngoài trời, kiến tạo những chiến dịch nổi bật và có giá trị bền vững.',
      url: 'https://ooh-coral.vercel.app/gioi-thieu'
    });
  }

  storyParagraphs: string[] = [
    'NF được hình thành với nền tảng chuyên môn trong lĩnh vực quảng cáo và sản xuất, từng bước phát triển năng lực từ những dự án quy mô nhỏ đến việc triển khai các chiến dịch quảng cáo ngoài trời trên nhiều tỉnh thành. Qua quá trình tích lũy kinh nghiệm và mở rộng hệ thống, NF từng bước hoàn thiện năng lực trong tư vấn, khai thác vị trí, sản xuất, thi công và vận hành các giải pháp OOH.',
    'Chúng tôi tin rằng một chiến dịch quảng cáo ngoài trời hiệu quả không chỉ bắt đầu từ một vị trí đẹp, mà cần được xây dựng trên sự kết hợp giữa vị trí, hình thức thể hiện, chất lượng triển khai và khả năng tiếp cận đúng đối tượng. Vì vậy, NF chú trọng xây dựng quy trình làm việc xuyên suốt, từ tiếp nhận nhu cầu, nghiên cứu khu vực, đề xuất vị trí và hình thức quảng cáo cho đến sản xuất, thi công, giám sát và nghiệm thu.',
    'Trong quá trình phát triển, NF không ngừng mở rộng mạng lưới đối tác, hệ thống vị trí và năng lực triển khai nhằm đáp ứng ngày càng đa dạng nhu cầu của doanh nghiệp, thương hiệu và các agency. Từ Billboard tấm lớn, biển ốp tường, biển quảng cáo tại khu vực đông dân cư, biển hộp, màn hình LED đến nhiều hình thức quảng cáo ngoài trời khác, NF hướng tới việc trở thành đơn vị cung cấp giải pháp OOH toàn diện, có khả năng đồng hành cùng khách hàng ở nhiều quy mô chiến dịch.',
    'Điểm NF đặc biệt chú trọng là khả năng kiểm soát chất lượng trong từng giai đoạn triển khai. Mỗi dự án đều được xây dựng theo quy trình rõ ràng, từ khảo sát thực tế, lựa chọn phương án, chuẩn bị sản xuất đến thi công và kiểm tra sau khi hoàn thiện. Điều này giúp NF chủ động hơn về tiến độ, chất lượng hình ảnh và khả năng đáp ứng các yêu cầu riêng của từng chiến dịch.',
    'Với định hướng phát triển lâu dài, NF tiếp tục đầu tư vào con người, hệ thống vị trí, công nghệ và năng lực vận hành, từng bước xây dựng một nền tảng OOH chuyên nghiệp và có khả năng đáp ứng các chiến dịch quảng cáo trên phạm vi rộng. Chúng tôi không đơn thuần cung cấp một vị trí quảng cáo, mà hướng đến việc trở thành đối tác đồng hành cùng thương hiệu trong toàn bộ quá trình đưa thông điệp đến thị trường.',
  ];

  processSteps: ProcessStep[] = [
    { num: '01', title: 'Khảo sát & chọn vị trí', desc: 'Đánh giá mật độ giao thông, góc nhìn và đối tượng mục tiêu để chọn vị trí phù hợp nhất với chiến dịch.' },
    { num: '02', title: 'Thiết kế', desc: 'Đội ngũ thiết kế nội bộ chuyển ý tưởng thương hiệu thành hình ảnh phù hợp với từng loại hình OOH.' },
    { num: '03', title: 'Thi công', desc: 'Đội thi công trực tiếp lắp đặt, giám sát tiến độ và đảm bảo an toàn tại hiện trường.' },
    { num: '04', title: 'Đo lường hiệu quả', desc: 'Theo dõi dữ liệu thực tế sau chiến dịch, báo cáo minh bạch để khách hàng đánh giá hiệu quả đầu tư.' },
  ];

  regions: Region[] = [
    { label: 'Địa bàn chính — Miền Bắc', cities: ['Hà Nội', 'Quảng Ninh', 'Hải Phòng', 'Hưng Yên', 'Hải Dương', 'Nam Định', 'Thái Bình', 'Bắc Ninh', 'Ninh Bình', 'Phú Thọ', 'Thái Nguyên', 'Vĩnh Phúc', 'Hòa Bình', 'Sơn La', 'Lạng Sơn', 'Bắc Giang'] },
    { label: 'Địa bàn chính — Miền Trung & Cao Nguyên', cities: ['Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Đà Nẵng', 'Nha Trang', 'Khánh Hòa', 'Buôn Mê Thuột', 'Huế', 'Quảng Nam', 'Quảng Trị', 'Quy Nhơn'] },
    { label: 'Theo dự án — Miền Nam', cities: ['TP. Hồ Chí Minh', 'Đồng Nai', 'Bình Dương', 'Vũng Tàu', 'Cần Thơ', 'Vĩnh Long', 'Long An', 'An Giang', 'Hậu Giang', 'Tiền Giang'] },
  ];

  stats: Stat[] = [
    { code: '01', name: 'Đối tác thương hiệu', sub: 'Đang đồng hành cùng NF OOH trên toàn quốc', value: '120' },
    { code: '02', name: 'Nhân sự vận hành', sub: 'Đội thi công, thiết kế và giám sát hiện trường', value: '85' },
    { code: '03', name: 'Chiến dịch đã triển khai', sub: 'Từ billboard đơn lẻ đến mạng lưới toàn quốc', value: '540' },
    { code: '04', name: 'Điểm quảng cáo đang quản lý', sub: 'Billboard, xe buýt, nhà chờ và màn hình LED', value: '860' },
  ];
}