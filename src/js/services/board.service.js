export default class Board {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    topGamers() {
        return this._$http({
            url: `${this._AppConstants.api}/users/top_gamers`,
            method: 'GET'
        }).then((res) => res.data);
    }
}
