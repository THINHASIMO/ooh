import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logo = '/assets/images/logo-header.png';
  isSolid = false;
  isMenuOpen = false;

  navItems: NavItem[] = [
    { label: 'Trang chủ', href: '#trang-chu' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Dịch vụ', href: '/dich-vu' },
    { label: 'Khách hàng', href: '#khach-hang' },
    { label: 'Tin tức', href: '/tin-tuc' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isSolid = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
