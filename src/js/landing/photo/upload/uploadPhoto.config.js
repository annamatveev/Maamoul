function PhotoConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.photo', {
            url: '/photo',
            controller: 'UploadPhotoCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'landing/photo/upload/uploadPhoto.html',
            title: 'Show yourself',
            resolve: {
                photos: function(Photos, LocalStorage) {
                    const user = LocalStorage.get('user');
                    return Photos.getUserPhotos(user.id);
                }
            }
        });

};

export default PhotoConfig;
