import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, AfterViewInit, PLATFORM_ID, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly title = signal('nf-ooh');
  isLoading = false;
  isBrowser: boolean;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    } else if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      setTimeout(() => this.isLoading = false, 400);

      // ← thêm scroll to top
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  });
}

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => { this.isLoading = false; }, 300);
      }
    });
  }
}