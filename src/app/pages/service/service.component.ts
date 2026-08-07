import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FadeInDirective } from '../../shared/directives/content.directive';

interface ServiceCard {
  tab: string;
  image: string;
  alt: string;
  desc: string;
  slug: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NgFor,FadeInDirective],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ServiceComponent {

  serviceHighlights = [
    'Vận hành độc lập theo từng hạng mục',
    'Lên kế hoạch chung, không rời rạc',
    'Nhất quán từ ngoài đường đến gian hàng'
  ];

  serviceCards: ServiceCard[] = [
    {
      tab: 'Ngoài trời',
      image: 'assets/images/services/ooh.jpg',
      alt: 'OOH — Billboard, màn hình LED, thân xe buýt và taxi',
      desc: 'Billboard, màn hình LED, thân xe buýt và taxi trên toàn mạng lưới.',
      slug: 'ooh'
    },
    {
      tab: 'Sự kiện',
      image: 'assets/images/services/event.jpg',
      alt: 'Event — Dựng sân khấu, ánh sáng và kỹ thuật sự kiện',
      desc: 'Dựng sân khấu, ánh sáng và kỹ thuật cho lễ ra mắt, hội nghị.',
      slug: 'event'
    },
    {
      tab: 'Không gian',
      image: 'assets/images/services/decor.jpg',
      alt: 'Decor — Thiết kế và thi công gian hàng, showroom',
      desc: 'Thiết kế và thi công gian hàng triển lãm, showroom.',
      slug: 'decor'
    }
  ];

  stats = [
    { num: '20', label: 'Năm kinh nghiệm' },
    { num: '500', label: 'Dự án hoàn thành' },
    { num: '200', label: 'Billboard đang vận hành' },
    { num: '50', label: 'Khách hàng doanh nghiệp' }
  ];

  processSteps = [
    {
      title: 'Khảo sát & tư vấn',
      desc: 'Tiếp nhận yêu cầu, phân tích mục tiêu chiến dịch và ngân sách để đề xuất giải pháp phù hợp.'
    },
    {
      title: 'Lên kế hoạch',
      desc: 'Lựa chọn vị trí, phương tiện quảng cáo và xây dựng timeline triển khai chi tiết.'
    },
    {
      title: 'Thiết kế sáng tạo',
      desc: 'Đội ngũ thiết kế phát triển ấn phẩm đúng nhận diện thương hiệu, tối ưu cho từng định dạng.'
    },
    {
      title: 'Thi công & lắp đặt',
      desc: 'Thi công chuyên nghiệp, đúng tiến độ, kiểm tra chất lượng trước khi bàn giao.'
    },
    {
      title: 'Vận hành & báo cáo',
      desc: 'Giám sát liên tục, bảo trì định kỳ và cung cấp báo cáo hiệu quả chiến dịch.'
    }
  ];

  clients = [
    'Acecook', 'Samsung', 'Pepsi', 'Highlands Coffee',
    'Techcombank', 'Masan', 'Grab',
    'Unilever', 'Honda', 'FPT', 'Viettel'
  ];

  constructor(private router: Router) {}

  goToDetail(slug: string) {
    this.router.navigate(['/dich-vu', slug]);
  }
}