import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import UsersService from './users.service';
servicesModule.service('Users', UsersService);

import PhotosService from './photos.service';
servicesModule.service('Photos', PhotosService);

import GuessService from './guess.service';
servicesModule.service('Guess', GuessService);

export default servicesModule;
