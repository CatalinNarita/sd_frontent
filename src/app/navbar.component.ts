
export class NavbarController {
  itemCount: number;

  constructor() {

  }

  $onInit() {
    console.log('test');
  }

}

export const navbar: angular.IComponentOptions = {
  template: require('./navbar.component.html'),
  controller: NavbarController,
  bindings: {
    itemCount: '<'
  }
};
