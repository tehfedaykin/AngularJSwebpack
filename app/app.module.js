'use strict';

import angular from 'angular';
import 'angular-animate' ;
import 'angular-route';

import 'jquery';

import './lib/bootstrap/dist/css/bootstrap.css';
import './app.css';
import './app.animations.css';

import routing from './app.config';
import './core/core.module';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
])
.config(routing);
