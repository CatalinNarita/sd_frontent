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

  invalidCredentials: string;

  constructor(private $http: IHttpService,
              private $state: StateService,
              private loginService: LoginService) {
    'ngInject';
  }

  login() {
    this.loginService.login(this.username)
      .then(response => {
        this.user = response.data;
        if (this.user.password === this.password) {
          this.loginService.getDbRoles(this.user);
          this.invalidCredentials = '';
        } else {
          this.invalidCredentials = 'Wrong username or password!';
        }
      });
  }

}

export const main: angular.IComponentOptions = {
  template: require('./login.html'),
  controller: LoginController
};
