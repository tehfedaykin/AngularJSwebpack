'use strict';

import 'angular-resource';
import phoneService from './phone.service';

// Define the `core.phone` module
const phoneModule = angular.module('core.phone', ['ngResource']).factory('Phone', phoneService);

export default phoneModule;
