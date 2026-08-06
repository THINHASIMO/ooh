import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { interval, Subscription } from 'rxjs';

interface TickerItem { number: string; label: string; }
interface RouteStop { code: string; title: string; desc: string; value: string; }
interface ServiceCard { tab: string; image: string; alt: string; slug: string; }
interface ServiceCategory { label: string; image: string; hasImage: boolean; }
interface NewsPost { date: string; title: string; excerpt: string; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('newsRail') newsRailRef?: ElementRef<HTMLDivElement>;

  billboardSlides: string[] = [
    'VỊ TRÍ ĐẮC ĐỊA',
    'TIẾP CẬN TRIỆU LƯỢT NHÌN',
    'THI CÔNG TRỌN GÓI',
  ];
  activeSlideIndex = 0;

  tickerItems: TickerItem[] = [
    { number: '120+', label: 'đối tác thương hiệu' },
    { number: '860+', label: 'điểm quảng cáo toàn quốc' },
    { number: '540+', label: 'chiến dịch đã triển khai' },
    { number: '21', label: 'tỉnh thành phủ sóng' },
    { number: '98%', label: 'khách hàng quay lại' },
  ];

  routeStops: RouteStop[] = [
    { code: '01', title: 'Đối tác thương hiệu', desc: 'Đang đồng hành cùng NF OOH trên toàn quốc', value: '120' },
    { code: '02', title: 'Nhân sự vận hành', desc: 'Đội thi công, thiết kế và giám sát hiện trường', value: '85' },
    { code: '03', title: 'Chiến dịch đã triển khai', desc: 'Từ billboard đơn lẻ đến mạng lưới toàn quốc', value: '540' },
    { code: '04', title: 'Điểm quảng cáo đang quản lý', desc: 'Billboard, xe buýt, nhà chờ và màn hình LED', value: '860' },
  ];

  serviceHighlights: string[] = [
    'Vận hành độc lập theo từng hạng mục',
    'Lên kế hoạch chung, không rời rạc',
    'Nhất quán từ ngoài đường đến gian hàng',
  ];

  serviceCards: ServiceCard[] = [
    { tab: 'Ngoài trời', image: 'assets/images/services/ooh.jpg', alt: 'OOH — Billboard, màn hình LED, thân xe buýt và taxi', slug: 'ooh' },
    { tab: 'Sự kiện', image: 'assets/images/services/event.jpg', alt: 'Event — Dựng sân khấu, ánh sáng và kỹ thuật sự kiện', slug: 'event' },
    { tab: 'Không gian', image: 'assets/images/services/decor.jpg', alt: 'Decor — Thiết kế và thi công gian hàng, showroom', slug: 'decor' },
  ];

  aboutPhoto = 'assets/images/banner.jpg';

  serviceCategories: ServiceCategory[] = [
    { label: 'Pano', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Billboard', image: 'assets/images/slider-2.png', hasImage: true },
    { label: 'Quảng cáo xe buýt', image: 'assets/images/slider-3.png', hasImage: true },
    { label: 'Quảng cáo taxi', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Quảng cáo ô tô', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Nhà chờ xe buýt', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Màn hình LED ngoài trời', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'LCD / Màn hình khung', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Hộp đèn (Lightbox)', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Banner', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Roadshow', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Human Billboard', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Roadshow cao cấp', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Quảng cáo sân Golf', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Quảng cáo sân bay', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Quảng cáo siêu thị', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Quảng cáo bệnh viện', image: 'assets/images/slider-1.png', hasImage: true },
    { label: 'Sự kiện / Kích hoạt', image: 'assets/images/slider-1.png', hasImage: true },
  ];

  logoHeader = 'assets/images/logo-header.png';
  logoFooter = 'assets/images/logo-footer.png';

  clientLogos: string[] = [
    'NORTHLINE', 'KAPPA GROUP', 'SÔNG HỒNG', 'VELOX', 'ĐẠI DƯƠNG XANH',
    'MERIDIAN', 'HOÀNG LONG', 'ATLAS RETAIL', 'TÍN PHÁT', 'ORBIT LABS',
  ];

  newsPosts: NewsPost[] = [
    { date: '16 Th08', title: 'OOH là gì? Vì sao vẫn quan trọng trong thời đại số?', excerpt: 'Quảng cáo ngoài trời không biến mất trước digital — nó thay đổi vai trò và trở thành điểm chạm không thể bỏ qua.' },
    { date: '02 Th09', title: 'Cách chọn vị trí billboard hiệu quả cho ngành bán lẻ', excerpt: 'Mật độ giao thông, góc nhìn và thời gian dừng đèn đỏ — ba yếu tố quyết định hiệu quả một vị trí quảng cáo.' },
    { date: '18 Th09', title: 'Thi công gian hàng triển lãm: những lỗi thường gặp', excerpt: 'Từ vật liệu chống cháy đến thời gian tháo dỡ — checklist giúp gian hàng của bạn vận hành trơn tru.' },
    { date: '05 Th10', title: 'Đo lường hiệu quả OOH bằng dữ liệu lưu lượng', excerpt: 'Không chỉ dựa vào vị trí đẹp — dữ liệu di chuyển thực tế giúp chứng minh hiệu quả đầu tư rõ ràng hơn.' },
  ];

  private slideSubscription?: Subscription;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.slideSubscription = interval(2000).subscribe(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.billboardSlides.length;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.slideSubscription?.unsubscribe();
  }

  scrollNews(direction: 1 | -1): void {
    const rail = this.newsRailRef?.nativeElement;
    if (!rail) return;
    rail.scrollBy({ left: direction * (340 + 24), behavior: 'smooth' });
  }

  onNewsletterSubmit(form: NgForm): void {
    if (form.invalid) return;
    alert('Đăng ký thành công!');
    form.resetForm();
  }
}