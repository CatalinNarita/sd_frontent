import {IComponentOptions} from 'angular';
import {IProduct} from '../../app.datamodel';

export class LaptopSpecController {
  product: IProduct;

  constructor() {

  }

  $onInit() {
    console.log(this.product);
  }

}

export const LaptopComponent: IComponentOptions = {
  template: require('./laptop-spec.html'),
  controller: LaptopSpecController,
  bindings: {
    product: '<'
  }
};
