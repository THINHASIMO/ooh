import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NEWS_POSTS, NewsPost } from '../news/news.component';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NewsDetailComponent implements OnInit {
  post: NewsPost | null = null;
  related: NewsPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.post = NEWS_POSTS.find(p => p.slug === slug) ?? null;

    if (this.post) {
      const baseUrl = 'https://ooh-coral.vercel.app';
      const imageUrl = `${baseUrl}/${this.post.image}`;
      const pageUrl = `${baseUrl}/tin-tuc/${slug}`;

      // Set title
      this.title.setTitle(`${this.post.title} | NF OOH`);

      // Set meta tags
      this.meta.updateTag({ property: 'og:title', content: this.post.title });
      this.meta.updateTag({ property: 'og:description', content: this.post.desc });
      this.meta.updateTag({ property: 'og:image', content: imageUrl });
      this.meta.updateTag({ property: 'og:url', content: pageUrl });
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ name: 'description', content: this.post.desc });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:title', content: this.post.title });
      this.meta.updateTag({ name: 'twitter:description', content: this.post.desc });
      this.meta.updateTag({ name: 'twitter:image', content: imageUrl });

      this.related = NEWS_POSTS
        .filter(p => p.slug !== slug && p.tag === this.post!.tag)
        .slice(0, 3);
    }
  }

  goBack() { this.router.navigate(['/tin-tuc']); }
  goToPost(slug: string) { this.router.navigate(['/tin-tuc', slug]); }
  imgError(e: Event) { (e.target as HTMLImageElement).style.display = 'none'; }
}