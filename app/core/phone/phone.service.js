'use strict';

phoneService.$inject = ['$http'];

function phoneService($http) {
  const env = 'http://localhost:3030';
  var service = {
    getPhones: getPhones,
    getPhone: getPhone
  }
  return service;

  function getPhones() {
    return $http({
      method: 'GET',
      //url: env + '/phones'
      url: 'phones/phones.json'
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(response) {
    });
  }

  function getPhone(id) {
    return $http({
      method: 'GET',
      url: 'phones/' + id + '.json'
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(response) {
    });
  }
}

export default phoneService;