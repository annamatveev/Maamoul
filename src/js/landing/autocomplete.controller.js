class AutocompleteCtrl {

    constructor($q, Users, LocalStorage, $scope) {
        'ngInject';
        var self = this;
        this._$q = $q;
        this._LocalStorage = LocalStorage;

        Users.getAllNames().then(function (users) {
            self.users = users;
        })
        console.log(this);
        console.log($scope);
    }

    onSelectedItemChange(item) {
        this.onSelectItem({item: item});
    }

    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }

    querySearch (query) {
        var results = query ? this.users.filter(this.createFilterFor(query) ) : this.users;
        return results;
    }
}

export default AutocompleteCtrl;