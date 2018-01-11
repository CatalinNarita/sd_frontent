import {IComponentOptions} from 'angular';
import {StateParams, StateProvider} from 'angular-ui-router';

export class ProductDetailsController {

  category: string;
  product: any;

  constructor(private $state: StateProvider,
              private $stateParams: StateParams) {
    this.product = this.$stateParams.product;
  }

  $onInit() {
    this.category = this.$stateParams.product.category;
    console.log(this.product);
  }

}

export const ProductDetailsComponet: IComponentOptions = {
  template: require('./product-details.component.html'),
  controller: ProductDetailsController
};
