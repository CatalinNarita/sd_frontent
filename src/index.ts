import * as angular from 'angular';

import {techsModule} from './app/techs/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';
import {UserModule} from './app/user/user.module';
import {LoginService} from './app/LoginService';
import {navbar} from './app/navbar.component';
import {UserService} from './app/user/user.service';
import {ProductService} from './app/product/product.service';
import {ProductModule} from './app/product/product.module';

import * as paginationModule from '../node_modules/angular-utils-pagination/';
import {AdminModule} from './app/admin/admin.module';
import {ProductDetailsModule} from './app/product/productDetails/product-details.module';
import guaranteeFilter from './guaranteeFilter';
import {PaginationModule} from './app/pagination/pagination.module';

import 'angular-ui-bootstrap';

export const defaultUrl: string = 'http://localhost:8080';

angular
  .module('app', [UserModule, ProductModule, techsModule, AdminModule, ProductDetailsModule, PaginationModule, 'ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .filter('guarantee', guaranteeFilter)
  .component('app', main)
  .component('navbar', navbar)
  .service('loginService', LoginService)
  .service('userService', UserService)
  .service('productService', ProductService);
