import { Directive, ElementRef, AfterViewInit, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[fadeIn]',
  standalone: true,
})
export class FadeInDirective implements AfterViewInit {
  @Input() fadeDelay = 0;
  @Input() fadeDirection: 'up' | 'left' | 'right' | 'none' = 'up';

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

ngAfterViewInit() {
  if (!isPlatformBrowser(this.platformId)) return;

  const el = this.el.nativeElement;

  const setHidden = () => {
    el.style.transition = 'none';
    el.style.opacity = '0';
    switch (this.fadeDirection) {
      case 'up':    el.style.transform = 'translateY(40px)'; break;
      case 'left':  el.style.transform = 'translateX(-40px)'; break;
      case 'right': el.style.transform = 'translateX(40px)'; break;
      default:      el.style.transform = 'translate(0,0)'; break;
    }
  };

  const setVisible = () => {
    el.style.transition = `opacity 0.6s ease ${this.fadeDelay}ms, transform 0.6s ease ${this.fadeDelay}ms`;
    el.style.opacity = '1';
    el.style.transform = 'translate(0, 0)';
  };

  setTimeout(() => {
    setHidden();

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setVisible();
      observer.disconnect(); // ← chỉ chạy 1 lần
    }
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

    observer.observe(el);
  }, 50);
}
}
