class HeaderCtrl {
    constructor($location, $rootScope, Auth, AppConstants) {
        'ngInject';

        this._$location = $location;
        this.appName = AppConstants.appName;

        if (Auth.isAuthenticated()) {
            Auth.currentUser().then((user) => { this.currentUser = user });
        }

        $rootScope.$on('devise:login', (event, user) => { this.currentUser = user });

        $rootScope.$on('devise:logout', () => { this.currentUser = null });
    }
}

export default HeaderCtrl;