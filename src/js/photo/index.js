import angular from 'angular';

let photoModule = angular.module('app.photo', []);

// Route Config
import PhotoConfig from './photo.config';
photoModule.config(PhotoConfig);

// Controllers
import PhotoCtrl from './photo.controller';
photoModule.controller('PhotoCtrl', PhotoCtrl);

// Components
import Gallery from './gallery/gallery.component';
photoModule.component('gallery', Gallery);

import UploadPhoto from './upload/upload.component';
photoModule.component('uploadPhoto', UploadPhoto);

export default photoModule;
