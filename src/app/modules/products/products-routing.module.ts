import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { permissionGuard } from '@abp/ng.core';

const routes: Routes = [
  {
    path: 'add',
    pathMatch: 'full',
    component: AddProductsComponent,
    // نقفل الدخول عبر الروت الرابط للذي ماعندة صلاحية
    canActivate:[permissionGuard],
    data: {
        requiredPolicy: 'Demo1.Products.CreateEdit', // policy key for your component
    },
  },
  {
    path: '',
    pathMatch: 'full',
    component: ListProductsComponent,
     // نقفل الدخول عبر الروت الرابط للذي ماعندة صلاحية
     canActivate:[permissionGuard],
     data: {
         requiredPolicy: 'Demo1.Products.List', // policy key for your component
     },
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
