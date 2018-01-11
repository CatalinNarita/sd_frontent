import {IHttpService} from 'angular';
import {defaultUrl} from '../../index';

export class ProductService {
  constructor(private $http: IHttpService) {

  }

  getAllProducts() {
    return this.$http.get(defaultUrl + '/product/all');
  }

}
