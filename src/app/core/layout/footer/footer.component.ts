import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  logo = 'assets/images/logo-footer.png';
  currentYear = new Date().getFullYear();
  hotline = '0913 567 076';
  email = 'quangcao@nf-ooh.vn';

  navLinks: FooterLink[] = [
    { label: 'Trang chủ', href: '#top' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Dịch vụ', href: '/dich-vu' },
    { label: 'Tin tức', href: '#news' },
  ];

  serviceLinks: FooterLink[] = [
    { label: 'NF OOH — OOH', href: '/dich-vu/ooh' },
    { label: 'NF OOH — Event', href: '/dich-vu/event' },
    { label: 'NF OOH — Decor', href: '/dich-vu/decor' },
  ];
}
