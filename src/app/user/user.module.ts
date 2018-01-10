
import * as angular from 'angular';
import {UserComponent} from './user.component';

export const UserModule = angular.module('userModule', [])
  .component('user', UserComponent)
  .name;
