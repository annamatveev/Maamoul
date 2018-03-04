import AutocompleteCtrl from './autocomplete.controller'

let AppAutocomplete = {
    controller: AutocompleteCtrl,
    bindings: {
        onSelectItem: '&'
    },
    templateUrl: 'landing/autocomplete.html'
};

export default AppAutocomplete;
