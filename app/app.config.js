'use strict';

import PhoneListController from "./phone-list/phone-list.component";
import PhoneDetailController from "./phone-detail/phone-detail.component";

routing.$inject = ['$routeProvider'];

export default function routing($routeProvider) {
  console.log('routing?');
  $routeProvider.
    when('/phones', {
      template: require('./phone-list/phone-list.template.html'),
      controller: PhoneListController,
      controllerAs: 'vm'
    }).
    when('/phones/:phoneId', {
      template: require('./phone-detail/phone-detail.template.html'),
      controller: PhoneDetailController,
      controllerAs: 'vm'
    }).
    otherwise('/phones');
}
