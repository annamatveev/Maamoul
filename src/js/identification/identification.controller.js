class IdentificationCtrl {

    constructor($q, $scope, $location, $rootScope, Auth, Users, LocalStorage) {
        'ngInject';

        this._$q = $q;
        this._LocalStorage = LocalStorage;
        this._$location = $location;
        this._$rootScope = $rootScope;
        this._Auth = Auth;
    }

    onSelectedItemChange(item) {
        if (item) {
            let self = this;
            this._Auth.login({ email: item.username + '@domain.com', password: 'Password1' }).then(function(user){
                self._LocalStorage.set('user', user);
                self._$location.path('/photo');
                self._$rootScope.$emit('login', user);
            });

        }
        else {
            this._LocalStorage.remove('user');
        }
    }

    createFilterFor(query) {
        const lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }

    querySearch (query) {
        const results = query ? this.$resolve.users.filter(this.createFilterFor(query) ) : this.$resolve.users;
        return results;
    }
}

export default IdentificationCtrl;