import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsSevice } from './services/products.service';
import { ModalService} from './services/modal.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
