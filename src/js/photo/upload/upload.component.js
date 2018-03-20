import UploadPhotoCtrl from './upload.controller'

let UploadPhoto = {
    controller: UploadPhotoCtrl,
    bindings: {
        currentUser: '<'
    },
    templateUrl: 'photo/upload/upload.html'
};

export default UploadPhoto;
