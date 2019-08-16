'use strict';

import './phone/phone.module';
import checkMarkFilter from './checkmark/checkmark.filter';

// Define the `core` module
const coreModule = angular.module('core', ['core.phone']).filter('checkmark', checkMarkFilter);

export default coreModule

