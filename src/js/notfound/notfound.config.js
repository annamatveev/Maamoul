function NotFoundConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.notfound', {
            url: '/notfound',
            templateUrl: 'notfound/notfound.html',
            title: 'Oops!',
        });

};

export default NotFoundConfig;
