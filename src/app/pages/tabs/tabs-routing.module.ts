import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TabsPage } from './tabs.page'

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      // {
      //   path: 'orders',
      //   loadChildren: () =>
      //     import('./orders/orders.module').then((m) => m.OrdersPageModule),
      // },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'address',
    loadChildren: () =>
      import('./address/address.module').then((m) => m.AddressPageModule),
  },
  // {
  //   path: 'orders',
  //   loadChildren: () =>
  //     import('/orders/orders.module').then((m) => m.OrdersPageModule),
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
