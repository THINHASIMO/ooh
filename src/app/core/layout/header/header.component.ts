import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logo = 'assets/images/logo-header.png';
  isSolid = false;
  isMenuOpen = false;

  navItems: NavItem[] = [
    { label: 'Trang chủ', href: '/', isAnchor: false },
    { label: 'Giới thiệu', href: '/gioi-thieu', isAnchor: false },
    { label: 'Dịch vụ', href: '/dich-vu', isAnchor: false },
    { label: 'Khách hàng', href: '#khach-hang', isAnchor: true },
    { label: 'Tin tức', href: '/tin-tuc', isAnchor: false },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isSolid = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}