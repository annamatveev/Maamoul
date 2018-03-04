class AutocompleteCtrl {

    constructor($q, Users) {
        'ngInject';
        var self = this;
        this._$q = $q;

        Users.getAllNames().then(function(users) {
            self.users = users;
        })
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