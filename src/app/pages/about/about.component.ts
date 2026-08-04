import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

interface Region {
  label: string;
  cities: string[];
}

interface Stat {
  code: string;
  name: string;
  sub: string;
  value: string;
}

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  encapsulation: ViewEncapsulation.None, // ← CSS không bị scope, giống styles.scss global
})
export class AboutComponent {
  processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Khảo sát & chọn vị trí',
      desc: 'Đánh giá mật độ giao thông, góc nhìn và đối tượng mục tiêu để chọn vị trí phù hợp nhất với chiến dịch.',
    },
    {
      num: '02',
      title: 'Thiết kế',
      desc: 'Đội ngũ thiết kế nội bộ chuyển ý tưởng thương hiệu thành hình ảnh phù hợp với từng loại hình OOH.',
    },
    {
      num: '03',
      title: 'Thi công',
      desc: 'Đội thi công trực tiếp lắp đặt, giám sát tiến độ và đảm bảo an toàn tại hiện trường.',
    },
    {
      num: '04',
      title: 'Đo lường hiệu quả',
      desc: 'Theo dõi dữ liệu thực tế sau chiến dịch, báo cáo minh bạch để khách hàng đánh giá hiệu quả đầu tư.',
    },
  ];

  regions: Region[] = [
    {
      label: 'Địa bàn chính — Miền Bắc',
      cities: [
        'Hà Nội', 'Quảng Ninh', 'Hải Phòng', 'Hưng Yên', 'Hải Dương',
        'Nam Định', 'Thái Bình', 'Bắc Ninh', 'Ninh Bình', 'Phú Thọ',
        'Thái Nguyên', 'Vĩnh Phúc', 'Hòa Bình', 'Sơn La', 'Lạng Sơn', 'Bắc Giang',
      ],
    },
    {
      label: 'Địa bàn chính — Miền Trung & Cao Nguyên',
      cities: [
        'Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Đà Nẵng', 'Nha Trang',
        'Khánh Hòa', 'Buôn Mê Thuột', 'Huế', 'Quảng Nam', 'Quảng Trị', 'Quy Nhơn',
      ],
    },
    {
      label: 'Theo dự án — Miền Nam',
      cities: [
        'TP. Hồ Chí Minh', 'Đồng Nai', 'Bình Dương', 'Vũng Tàu',
        'Cần Thơ', 'Vĩnh Long', 'Long An', 'An Giang', 'Hậu Giang', 'Tiền Giang',
      ],
    },
  ];

  stats: Stat[] = [
    {
      code: '01',
      name: 'Đối tác thương hiệu',
      sub: 'Đang đồng hành cùng NF OOH trên toàn quốc',
      value: '120',
    },
    {
      code: '02',
      name: 'Nhân sự vận hành',
      sub: 'Đội thi công, thiết kế và giám sát hiện trường',
      value: '85',
    },
    {
      code: '03',
      name: 'Chiến dịch đã triển khai',
      sub: 'Từ billboard đơn lẻ đến mạng lưới toàn quốc',
      value: '540',
    },
    {
      code: '04',
      name: 'Điểm quảng cáo đang quản lý',
      sub: 'Billboard, xe buýt, nhà chờ và màn hình LED',
      value: '860',
    },
  ];
}