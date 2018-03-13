class LeastFamiliarCtrl {

    constructor($timeout, $state, AppConstants) {
        'ngInject';

        this._$timeout = $timeout;
        this._$state = $state;
        this._AppConstants = AppConstants;

    }
}

export default LeastFamiliarCtrl;