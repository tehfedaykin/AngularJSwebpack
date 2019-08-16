'use strict';


PhoneListController.$inject = ['Phone'];

export default function PhoneListController(Phone) {
  var vm = this;
   Phone.getPhones().then(function (response) {
    vm.phones = response;
  });
  vm.orderProp = 'age';
}