class SideNavCtrl {
    constructor($timeout, $scope, $state, $rootScope, $mdSidenav, AppConstants, Auth) {
        'ngInject';

        this._$timeout = $timeout;
        this._$state = $state;
        this._$scope = $scope;
        this._$mdSidenav = $mdSidenav;
        this._$rootScope = $rootScope;
        this._Auth = Auth;
        this._AppConstants = AppConstants;
        this.toggleLeft = this.buildDelayedToggler('left');
        this.toggleRight = this.buildToggler('right');
        this.isOpenRight = function(){
            return this._$mdSidenav('right').isOpen();
        };

    }

    debounce(func, wait, context) {
        let timer;

        return function debounced() {
            var context = this._$scope,
                args = Array.prototype.slice.call(arguments);
            this._$timeout.cancel(timer);
            timer = this._$timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    buildDelayedToggler(navID) {
        return this.debounce(function() {
            this._$mdSidenav(navID)
                .toggle();
        }, 200);
    }

    buildToggler(navID) {
        return function() {
            this._$mdSidenav(navID)
                .toggle();
        };
    }

    close() {
        this._$mdSidenav('right').close();

    };

    isLoggedIn() {
        return this._Auth.isAuthenticated();
    }

    logout() {
        const config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };

        this._Auth.logout(config).then(() => this._$state.go('app.identification'));
        this.close();
    }
}

export default SideNavCtrl;