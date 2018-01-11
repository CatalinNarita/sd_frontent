import * as angular from 'angular';
import {ProductDetailsComponet} from './product-details.component';
import {LaptopComponent} from './laptop-spec';
import {SmartphoneSpec} from './smartphone-spec';
import {MonitorComponent} from './monitor-spec';

export const ProductDetailsModule = angular.module('productDetailsModule', [])
  .component('productDetails', ProductDetailsComponet)
  .component('laptopSpec', LaptopComponent)
  .component('monitorSpec', MonitorComponent)
  .component('smartphoneSpec', SmartphoneSpec)
  .name;
