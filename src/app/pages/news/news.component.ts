import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Router } from '@angular/router';

export interface NewsPost {
  slug: string;
  date: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
}

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: 'ooh-la-gi-vi-sao-van-quan-trong',
    date: '16 Th08',
    tag: 'Xu hướng OOH',
    title: 'OOH là gì? Vì sao vẫn quan trọng trong thời đại số?',
    desc: 'Quảng cáo ngoài trời không biến mất trước digital — nó thay đổi vai trò và trở thành điểm chạm không thể bỏ qua trong hành trình omnichannel.',
    image: 'assets/images/news/ooh-digital.jpg'
  },
  {
    slug: 'cach-chon-vi-tri-billboard-ban-le',
    date: '02 Th09',
    tag: 'Kiến thức',
    title: 'Cách chọn vị trí billboard hiệu quả cho ngành bán lẻ',
    desc: 'Mật độ giao thông, góc nhìn và thời gian dừng đèn đỏ — ba yếu tố quyết định hiệu quả một vị trí quảng cáo.',
    image: 'assets/images/news/billboard-retail.jpg'
  },
  {
    slug: 'thi-cong-gian-hang-trien-lam-loi-thuong-gap',
    date: '18 Th09',
    tag: 'Kiến thức',
    title: 'Thi công gian hàng triển lãm: những lỗi thường gặp',
    desc: 'Từ vật liệu chống cháy đến thời gian tháo dỡ — checklist giúp gian hàng của bạn vận hành trơn tru.',
    image: 'assets/images/news/gian-hang.jpg'
  },
  {
    slug: 'do-luong-hieu-qua-ooh-bang-ai',
    date: '05 Th10',
    tag: 'Xu hướng OOH',
    title: 'Đo lường hiệu quả OOH bằng dữ liệu lưu lượng AI',
    desc: 'Không chỉ ước tính — công nghệ camera AI đang cho phép đo lường lượt xem thực tế theo giờ, theo ngày.',
    image: 'assets/images/news/ai-ooh.jpg'
  },
  {
    slug: 'case-study-vinfast-50-billboard-7-ngay',
    date: '20 Th10',
    tag: 'Chiến dịch',
    title: 'Case study: Vinfast phủ sóng 50 billboard trong 7 ngày',
    desc: 'Chiến lược triển khai đồng bộ OOH và digital cho campaign ra mắt dòng xe mới tại Hà Nội.',
    image: 'assets/images/news/vinfast-campaign.jpg'
  },
  {
    slug: 'programmatic-ooh-2026',
    date: '01 Th11',
    tag: 'Xu hướng OOH',
    title: 'Programmatic OOH 2026: mua biển theo dữ liệu thời gian thực',
    desc: 'Thị trường OOH đang chuyển dịch từ hợp đồng cố định sang mô hình auction tự động theo slot giờ.',
    image: 'assets/images/news/programmatic.jpg'
  },
  {
    slug: '5-tieu-chi-chon-vi-tri-bien-led',
    date: '12 Th11',
    tag: 'Kiến thức',
    title: '5 tiêu chí chọn vị trí đặt biển LED ngoài trời hiệu quả nhất',
    desc: 'Góc nhìn, khoảng cách quan sát, lưu lượng xe và thời gian dừng đèn — bộ tiêu chí chuẩn để đánh giá một vị trí OOH.',
    image: 'assets/images/news/bien-led.jpg'
  },
  {
    slug: 'dynamic-creative-bien-quang-cao-thay-noi-dung',
    date: '18 Th11',
    tag: 'Xu hướng OOH',
    title: 'Dynamic creative: khi biển quảng cáo thay nội dung theo thời tiết',
    desc: 'Màn hình LED outdoor hiển thị thông điệp khác nhau tùy nhiệt độ, thời tiết, giờ trong ngày.',
    image: 'assets/images/news/dynamic.jpg'
  },
  {
    slug: 'nf-ooh-mo-rong-da-nang',
    date: '25 Th11',
    tag: 'Tin công ty',
    title: 'NF OOH mở rộng mạng lưới sang Đà Nẵng và các tỉnh miền Trung',
    desc: 'Sau 20 năm hoạt động tại miền Bắc, NF OOH chính thức khai trương văn phòng đại diện tại Đà Nẵng.',
    image: 'assets/images/news/danang.jpg'
  },
  {
    slug: 'backdrop-su-kien-checklist-ky-thuat',
    date: '30 Th11',
    tag: 'Chiến dịch',
    title: 'Backdrop sự kiện khổ lớn: checklist kỹ thuật trước ngày thi công',
    desc: 'Từ khung nhôm định hình đến mực in UV — những hạng mục cần kiểm tra trước khi lắp đặt backdrop.',
    image: 'assets/images/news/backdrop.jpg'
  }
];

const TAGS = ['Tất cả', 'Xu hướng OOH', 'Kiến thức', 'Chiến dịch', 'Tin công ty'];
const PAGE_SIZE = 6;

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent {
  tags = TAGS;
  activeTag = 'Tất cả';
  currentPage = 1;
  email = '';

  constructor(private router: Router) {}

  get allPosts(): NewsPost[] {
    return this.activeTag === 'Tất cả'
      ? NEWS_POSTS
      : NEWS_POSTS.filter(p => p.tag === this.activeTag);
  }

  get featuredPost(): NewsPost {
    return this.allPosts[0];
  }

  get featuredSide(): NewsPost[] {
    return this.allPosts.slice(1, 3);
  }

  get gridPosts(): NewsPost[] {
    const start = (this.currentPage - 1) * PAGE_SIZE;
    return this.allPosts.slice(3 + start, 3 + start + 3);
  }

  get listPosts(): NewsPost[] {
    const start = (this.currentPage - 1) * PAGE_SIZE;
    return this.allPosts.slice(6 + start, 6 + start + PAGE_SIZE);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil((this.allPosts.length - 3) / PAGE_SIZE));
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setTag(tag: string) {
    this.activeTag = tag;
    this.currentPage = 1;
  }

  setPage(p: number) {
    this.currentPage = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToPost(slug: string) {
    this.router.navigate(['/tin-tuc', slug]);
  }

  imgError(e: Event) {
    (e.target as HTMLImageElement).style.display = 'none';
  }
}