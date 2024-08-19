import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {
    path: 'add',
    pathMatch: 'full',
    component: AddProductsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: ListProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
