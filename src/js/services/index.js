import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


import UserService from './user.service';
servicesModule.service('User', UserService);

import UsersService from './users.service';
servicesModule.service('Users', UsersService);

import PhotosService from './photos.service';
servicesModule.service('Photos', PhotosService);

import JwtService from './jwt.service'
servicesModule.service('JWT', JwtService);

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

import ArticlesService from './articles.service';
servicesModule.service('Articles', ArticlesService);

import CommentsService from './comments.service';
servicesModule.service('Comments', CommentsService);

import TagsService from './tags.service';
servicesModule.service('Tags', TagsService);

import LocalStorageService from './localStorage.service';
servicesModule.service('LocalStorage', LocalStorageService);

export default servicesModule;
