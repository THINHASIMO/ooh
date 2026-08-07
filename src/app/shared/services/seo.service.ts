import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

const BASE_URL = 'https://ooh-coral.vercel.app';
const DEFAULT: SeoConfig = {
  title: 'NF OOH — Agency Quảng Cáo Ngoài Trời',
  description: 'Từ billboard cao tốc đến thân xe buýt — NF OOH lên kế hoạch, thi công và vận hành toàn bộ mạng lưới quảng cáo ngoài trời cho thương hiệu của bạn.',
  image: `${BASE_URL}/assets/images/banner.jpg`,
  url: BASE_URL,
  type: 'website'
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  set(config: Partial<SeoConfig> = {}) {
    const data: SeoConfig = { ...DEFAULT, ...config };
    const image = data.image?.startsWith('http') ? data.image : `${BASE_URL}/${data.image}`;

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: data.url ?? BASE_URL });
    this.meta.updateTag({ property: 'og:type', content: data.type ?? 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  reset() { this.set(); }
}