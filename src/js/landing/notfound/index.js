import angular from 'angular';

let notfoundModule = angular.module('app.notfound', []);

// Route Config
import NotFoundConfig from './notfound.config';
notfoundModule.config(NotFoundConfig);

export default notfoundModule;
