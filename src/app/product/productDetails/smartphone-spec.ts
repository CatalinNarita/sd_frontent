import {IComponentOptions} from 'angular';
import {IProduct} from '../../app.datamodel';

export class SmartphoneSpecController {
  product: IProduct;

  constructor() {

  }

  $onInit() {
    console.log(this.product);
  }

}

export const SmartphoneSpec: IComponentOptions = {
  template: require('./smartphone-spec.html'),
  controller: SmartphoneSpecController,
  bindings: {
    product: '<'
  }
};
