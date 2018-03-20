class IdentificationCtrl {

    constructor($q, $scope, $state, $rootScope, Auth) {
        'ngInject';

        this._$q = $q;
        this._$state = $state;
        this._$rootScope = $rootScope;
        this._Auth = Auth;
    }

    onSelectedItemChange(item) {
        if (item) {
            let self = this;

            self._Auth.login({ email: item.email, password: 'Password1' }).then(() => self._$state.go('app.photo'));
        }
    }

    querySearch (query) {
        return query ? this.$resolve.users.filter(angular.lowercase(query)) : this.$resolve.users;
    }
}

export default IdentificationCtrl;