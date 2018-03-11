import angular from 'angular';

let identificationModule = angular.module('app.identification', []);

// Route Config
import IdentificationConfig from './identification.config';
identificationModule.config(IdentificationConfig);

// Controllers
import IdentificationCtrl from './identification.controller';
identificationModule.controller('IdentificationCtrl', IdentificationCtrl);

export default identificationModule;
