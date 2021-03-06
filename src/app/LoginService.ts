import {IRole, IUser} from './app.datamodel';
import {IHttpService} from 'angular';
import {defaultUrl} from '../index';
import {StateService} from 'angular-ui-router';

export class LoginService {

  role: IRole | any;

  constructor(private $http: IHttpService,
              private $state: StateService) {
    'ngInject';
  }

  login(username) {
    return this.$http.get(defaultUrl + '/user/get/' + username);
  }

  getDbRoles(user: IUser) {
    this.$http.get(defaultUrl + '/role/' + user.username)
      .then(response => {
        this.role = response.data;
        this.checkUserRole(user, this.role);
      });
  }

  private checkUserRole(user: IUser, role: IRole) {
    role.roleName === 'ROLE_USER' ? this.$state.go('product') : this.$state.go('admin');
  }

}
