export default class Guess {
    constructor(AppConstants, $http) {
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
    }

    generate() {
        return this._$http({
            url: `${this._AppConstants.api}/guesses/new`,
            method: 'GET'
        }).then((res) => res.data);
    }

    guessName(photo_id, guessed_user_id, user_id) {
        return this._$http({
            url: `${this._AppConstants.api}/guesses`,
            method: 'POST',
            data: { user_id, photo_id, guessed_user_id }
        }).then((res) => res.data.body);
    }

}
