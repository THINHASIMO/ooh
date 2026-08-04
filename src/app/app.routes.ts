import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent),
    title: 'NF OOH | Quảng cáo ngoài trời'
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
  }
];