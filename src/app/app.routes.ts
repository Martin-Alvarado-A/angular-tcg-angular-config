import { Routes } from '@angular/router';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainTreeComponent } from './main-tree/main-tree.component';

export const routes: Routes = [
  { path: '', redirectTo: '/elements', pathMatch: 'full' },
  { path: 'elements', component: MainTableComponent },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'tree', component: MainTreeComponent },
];
