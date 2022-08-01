import { importProvidersFrom, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage,
    children: [
      {
        path: 'add',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/add/add.module').then(m => m.AddPageModule)
          }
    ]
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      }
]
},
  {
    path: 'account',
    children: [
    ]
    },
    {
      path: '',
      redirectTo: 'account',
      pathMatch: 'full'

    }
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}