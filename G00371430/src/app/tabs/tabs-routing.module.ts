import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

// Used for Page Routing: When Tabs have been changed
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,

    // Lists all the children of the 'Tabs' page - Provides routing between pages
    children: [
      {
        // Home Page (Teams)
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        // Players Page
        path: 'players',
        loadChildren: () => import('../players/players.module').then(m => m.PlayersPageModule)
      },
      {
        // User Page
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        // User Page
        path: 'championships',
        loadChildren: () => import('../championships/championships.module').then(m => m.ChampionshipsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
