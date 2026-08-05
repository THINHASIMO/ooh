import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent),
    title: 'NF OOH | Quảng cáo ngoài trời | Quảng cáo OOH chuyên nghiệp'
  },
  {
    path: 'gioi-thieu',
    loadComponent: () =>
      import('./pages/about/about.component')
        .then(m => m.AboutComponent),
    title: 'Giới thiệu | NF OOH'
  },
  {
    path: 'dich-vu',
    loadComponent: () =>
      import('./pages/service/service.component')
        .then(m => m.ServiceComponent),
    title: 'Dịch vụ | NF OOH'
  },
  {
    path: 'dich-vu/:slug',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.component')
        .then(m => m.ServiceDetailComponent),
    title: 'Chi tiết dịch vụ | NF OOH'
  },{
  path: 'tin-tuc',
  loadComponent: () =>
    import('./pages/news/news.component')
      .then(m => m.NewsComponent),
  title: 'Tin tức | NF OOH'
},
{
  path: 'tin-tuc/:slug',
  loadComponent: () =>
    import('./pages/news-detail/news-detail.component')
      .then(m => m.NewsDetailComponent),
  title: 'Bài viết | NF OOH'
}
];