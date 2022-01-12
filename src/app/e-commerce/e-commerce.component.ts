import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PriceFilter } from './models/price-filter';
import { ProductList } from './models/product';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

  priceFilter: PriceFilter[] = [
    {
      key: 'ALL',
      value: 'All Prices'
    },
    {
      key: 'ONE_THOUSAND',
      value: 'Under 1000'
    },
    {
      key: 'FIVE_THOUSAND',
      value: '1000 - 5000'
    },
    {
      key: 'TEN_THOUSAND',
      value: '5000 - 10000'
    },
    {
      key: 'TWENTY_THOUSAND',
      value: '10000 - 20000'
    },
    {
      key: 'OVER',
      value: 'Above 20000'
    }
  ];
  selectedFilter = this.priceFilter[0].key;
  products: ProductList[] = [];
  filteredProducts: ProductList[] = [];
  displayGrid = true;

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ProductList[]>('./assets/productList.json').subscribe((productList: ProductList[]) => {
      this.products = productList;
      this.filteredProducts = productList;
    }, () => { console.log('failed') });
  }

  filterProducts() {
    switch (this.selectedFilter) {
      case 'ONE_THOUSAND':
        this.filteredProducts = this.products.filter(prod => prod.price <= 1000);
        break;
      case 'FIVE_THOUSAND':
        this.filteredProducts = this.products.filter(prod => prod.price > 1000 && prod.price <= 5000);
        break;
        case 'TEN_THOUSAND':
        this.filteredProducts = this.products.filter(prod => prod.price > 5000 && prod.price <= 10000);
        break;
        case 'TWENTY_THOUSAND':
        this.filteredProducts = this.products.filter(prod => prod.price > 10000 && prod.price <= 20000);
        break;
      case 'OVER':
        this.filteredProducts = this.products.filter(prod => prod.price > 20000);
        break;
      default:
        this.filteredProducts = this.products;
    }
  }

}
