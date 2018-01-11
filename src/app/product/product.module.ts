import * as angular from 'angular';
import {ProductComponent} from './product.component';

export const ProductModule = angular.module('productModule', [])
  .component('product', ProductComponent)
  .name;
