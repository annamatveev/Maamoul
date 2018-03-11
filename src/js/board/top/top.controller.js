class TopGamersCtrl {

    constructor($timeout, $state, AppConstants, Board) {
        'ngInject';

        this._$timeout = $timeout;
        this._$state = $state;
        this._AppConstants = AppConstants;

    }
}

export default TopGamersCtrl;