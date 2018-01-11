import {IComponentOptions} from 'angular';

export class AdminController {
  constructor() {

  }
}

export const AdminComponent: IComponentOptions = {
  template: require('./admin.component.html'),
  controller: AdminController
}
