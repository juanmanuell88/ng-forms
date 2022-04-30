import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { BootComponent } from './boot/boot.component';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'boot', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee', component: EmployeeFormComponent },
  { path: 'bootstrap-form', component: BootComponent },
  { path: 'bootstrap', component: BootComponent },
  { path: 'boot', component: BootComponent },
  {
    path: 'github',
    component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      {
        path: ':org',
        component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }
    ]
  }
];
