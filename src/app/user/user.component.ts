import {IHttpService} from 'angular';
import {IUser} from '../app.datamodel';
import {UserService} from './user.service';

export class UserController {
  users: IUser | any;

  constructor(private $http: IHttpService,
              private userService: UserService) {
    'ngInject';
  }

  getAllUsers() {
    // this.$http.get('http://localhost:8080/user/all')
    //   .then(response => {
    //     this.users = response.data;
    //   });

    this.userService.getAllUsers()
      .then(response => {
        this.users = response.data;
      });

  }

}

export const UserComponent: angular.IComponentOptions = {
  template: require('./user.component.html'),
  controller: UserController
};
