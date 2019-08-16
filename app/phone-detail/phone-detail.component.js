'use strict';


PhoneDetailController.$inject = ['$routeParams', 'Phone'];

function PhoneDetailController($routeParams, Phone) {
  var vm = this;
  Phone.getPhone($routeParams.phoneId).then(function(res) {
    vm.setImage(res.images[0]);
    vm.phone =  res;
  })

  vm.setImage = function setImage(imageUrl) {
    vm.mainImageUrl = imageUrl;
  };
}

export default PhoneDetailController;