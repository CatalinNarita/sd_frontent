import {IProduct} from '../app.datamodel';
import {ProductService} from './product.service';
import {IComponentOptions, IOnInit} from 'angular';
import {StateService} from 'angular-ui-router';
import {PaginationModel} from '../pagination/pagination.module';

export class ProductController implements IOnInit {

  products: any;
  search: string;
  itemCount: number = 10;

  pager: PaginationModel;

  constructor(private productService: ProductService,
              private $state: StateService,
              $filter) {

  }

  $onInit() {
    this.getAllProducts();
  }

  $onChanges(changes): void {
    if (this.products && changes.products) {
      this.pager = new PaginationModel(this.products, 5);
    }
  }

  getAllProducts() {
    this.productService.getAllProducts()
      .then(response => {
        this.products = response.data;
        // this.itemCount = this.products.length;
        this.pager = new PaginationModel(this.products, 5);
      });
  }

  goToProductDetails(product: IProduct | any) {
    this.$state.go('productDetails', {product: product});
  }
}

export const ProductComponent: IComponentOptions = {
  template: require('./product.component.html'),
  controller: ProductController
};
