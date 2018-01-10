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

export const defaultUrl: string = 'http://localhost:8080';

angular
  .module('app', [UserModule, techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer)
  .component('navbar', navbar)
  .service('loginService', LoginService);
