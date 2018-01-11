import {IComponentOptions} from 'angular';
import {IProduct} from '../../app.datamodel';

export class MonitorSpecController {
  product: IProduct;

  constructor() {

  }

  $onInit() {
    console.log(this.product);
  }

}

export const MonitorComponent: IComponentOptions = {
  template: require('./monitor-spec.html'),
  controller: MonitorSpecController,
  bindings: {
    product: '<'
  }
};
