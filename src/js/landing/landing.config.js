function LandingConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.landing', {
            url: '/',
            title: 'Home',
        });

};

export default LandingConfig;
