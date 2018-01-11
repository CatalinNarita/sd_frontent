import {IHttpService} from 'angular';
import {defaultUrl} from '../../index';

export class UserService {
  constructor(private $http: IHttpService) {

  }

  getAllUsers() {
    return this.$http.get(defaultUrl + '/user/all');
  }

}
