import { Component, OnInit } from '@angular/core';
import { ProductsSevice } from 'src/app/services/products.service';
import { ModalService } from 'src/app/services/modal.service';
import { IProduct } from 'src/app/models/product';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'Angular app';

  products: IProduct[] = [];
  loading = false;
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsSevice,
    public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(tap( ()=> this.loading = false))
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
