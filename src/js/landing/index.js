import angular from 'angular';

// Create the module where our functionality can attach to
let landingModule = angular.module('app.landing', []);

// Route Config
import LandingConfig from './landing.config';
landingModule.config(LandingConfig);

// Controllers
import LandingCtrl from './landing.controller';
landingModule.controller('LandingCtrl', LandingCtrl);

export default landingModule;
