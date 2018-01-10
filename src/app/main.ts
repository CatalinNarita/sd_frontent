import {IHttpService} from 'angular';
import {IRole, IUser} from './app.datamodel';
import {defaultUrl} from '../index';
import {StateService} from 'angular-ui-router';
import {LoginService} from './LoginService';

export class LoginController {
  username: string;
  password: string;

  user: IUser | any;
  role: IRole | any;

  constructor(private $http: IHttpService,
              private $state: StateService,
              private loginService: LoginService) {
    'ngInject';
  }

  login() {
    this.$http.get(defaultUrl + '/user/get/' + this.username)
      .then(response => {
        this.user = response.data;
        this.loginService.getDbRoles(this.user);
      });
  }

}

export const main: angular.IComponentOptions = {
  template: require('./login.html'),
  controller: LoginController
};
