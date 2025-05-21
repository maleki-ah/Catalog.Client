import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {

  //? Fake Seed Data
  products !: Array<Product>;

  productDataSource: MatTableDataSource<Product>;

  columnsToDisplay !: Array<string>;

  constructor() {

    //? Fake Seed Data
    this.products = [
      new Product(1, 'P1', '100'),
      new Product(2, 'P2', '200'),
      new Product(3, 'P3', '300'),
      new Product(4, 'P4', '400')
    ];

    this.productDataSource = new MatTableDataSource<Product>(this.products);
    this.columnsToDisplay = [
      'Id',
      'Name',
      'Price'
    ];
  }
}
