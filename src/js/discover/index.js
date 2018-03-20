import angular from 'angular';

let discoverModule = angular.module('app.discover', []);

// Route Config
import DiscoverConfig from './discover.config';
discoverModule.config(DiscoverConfig);

// Controllers
import DiscoverCtrl from './discover.controller';
discoverModule.controller('DiscoverCtrl', DiscoverCtrl);

export default discoverModule;
