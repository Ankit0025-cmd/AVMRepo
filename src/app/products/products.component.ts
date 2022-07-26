import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  isVisible: boolean = false;
  //filterText: string = "Cart";

  private _listFilter: string = "";
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    //console.log('in Setter:', value);
    this.filteredProducts = this.performFilter(value);
    //console.log(this.filteredProducts);
  }

    filteredProducts: IProduct[] = [];
  
    products: IProduct[] = [];
    buttonName: string = "Show Image";

    performFilter(filterBy: string): IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      //console.log('filter by: '+ filterBy);
      return this.products.filter((product:IProduct)=>{
        return product.productName.toLocaleLowerCase().includes(filterBy);
        // console.log(product.productName.toLocaleLowerCase().includes(filterBy));
      })
    }

    toggleImage(): void{
      this.isVisible = !this.isVisible;
      if(this.isVisible)
        this.buttonName = "Hide Image";
      else
        this.buttonName = "show Image";
    }

  onRatingClicked(message: string): void{
    this.pageTitle = `Poduct List: ${message}`;
  }
  public errorMsg: string = "";
  private _productService;
  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      data => {
        this.products = data;
        this.filteredProducts = this.products;},
      error => this.errorMsg = error);
  }

  constructor(productService: ProductService) { 
    this._productService = productService;
  }
}
