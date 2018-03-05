function LandingConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.landing', {
            url: '/',
            controller: 'LandingCtrl',
            controllerAs: '$ctrl',
            title: 'Home'
        });

};

export default LandingConfig;
