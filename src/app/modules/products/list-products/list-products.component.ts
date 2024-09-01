import { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductDto, ProductsService } from '@proxy/products';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {
products : ProductDto[] = [];
input: PagedAndSortedResultRequestDto = { maxResultCount: 10, skipCount: 0 };
searchForm: FormGroup;

  constructor(private productsService: ProductsService, private router:Router
              ,private formBuilder:FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.searchProducts();
  }
  buildForm() {
    this.searchForm = this.formBuilder.group({
      filter: new FormControl(''),
    });
  }
  addProduct() {
    this.router.navigateByUrl('/products/add');
  }

  searchProducts() {
    this.productsService.getList(this.searchForm.value).subscribe(result => this.products = result.items);
  }
}
