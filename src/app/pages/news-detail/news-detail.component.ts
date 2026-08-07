import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NEWS_POSTS, NewsPost } from '../news/news.component';
import { SeoService } from '../../shared/services/seo.service';

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
    private seo: SeoService
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.post = NEWS_POSTS.find(p => p.slug === slug) ?? null;

    if (this.post) {
      this.seo.set({
        title: `${this.post.title} | NF OOH`,
        description: this.post.desc,
        image: this.post.image,
        url: `https://ooh-coral.vercel.app/tin-tuc/${slug}`,
        type: 'article'
      });

      this.related = NEWS_POSTS
        .filter(p => p.slug !== slug && p.tag === this.post!.tag)
        .slice(0, 3);
    }
  }

  goBack() { this.router.navigate(['/tin-tuc']); }
  goToPost(slug: string) { this.router.navigate(['/tin-tuc', slug]); }
  imgError(e: Event) { (e.target as HTMLImageElement).style.display = 'none'; }
}