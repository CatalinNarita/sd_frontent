import * as angular from 'angular';
import {AdminComponent} from './admin.component';

export const AdminModule = angular.module('adminModule', [])
  .component('admin', AdminComponent)
  .name;
