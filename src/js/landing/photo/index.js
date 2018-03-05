import angular from 'angular';

let photoModule = angular.module('app.photo', []);

// Route Config
import PhotoConfig from './upload/uploadPhoto.config';
photoModule.config(PhotoConfig);

// Controllers
import UploadPhotoCtrl from './upload/uploadPhoto.controller';
photoModule.controller('UploadPhotoCtrl', UploadPhotoCtrl);

export default photoModule;
