import {IProduct} from './app/app.datamodel';

export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('user', {
      url: '/user',
      component: 'user'
    })
    .state('product', {
      url: '/products',
      component: 'product'
    })
    .state('admin', {
      url: '/admin',
      component: 'admin'
    })
    .state('productDetails', {
      url: '/product/details',
      component: 'productDetails',
      params: {
        product: null
      }
    });
}
