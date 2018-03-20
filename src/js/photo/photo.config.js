function PhotoConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.photo', {
            url: '/photo',
            controller: 'PhotoCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'photo/photo.html',
            title: 'Show yourself',
            resolve: {
                photos: function($location, Auth, Photos) {
                    return Auth.currentUser().then(function(user) {
                            return Photos.getUserPhotos(user);
                        });
                },
                currentUser: function(Auth) {
                    return Auth.currentUser().then(function(user) {
                        return user;
                    });
                },
            }
        });

};

export default PhotoConfig;
