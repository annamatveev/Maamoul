function LandingConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.landing', {
            url: '/',
            controller: 'LandingCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'landing/landing.html',
            title: 'Home'
        });

};

export default LandingConfig;
