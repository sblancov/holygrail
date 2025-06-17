import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ItemsComponent} from './items/items.component';
import {StatsComponent} from './stats/stats.component';
import {LogsComponent} from './logs/logs.component';
import { AdminComponent } from './components/admin/admin.component';


export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'items',
      component: ItemsComponent,
    },
    {
      path: 'stats',
      component: StatsComponent,
    },
    {
      path: 'logs',
      component: LogsComponent,
    },
    {
      path: 'admin',
      component: AdminComponent,
    },
];
