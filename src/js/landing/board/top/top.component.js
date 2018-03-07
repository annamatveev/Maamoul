import TopGamersCtrl from './top.controller'

let TopGamers = {
    bindings: {
        gamers: '='
    },
    controller: TopGamersCtrl,
    templateUrl: 'landing/board/top/top.html'
};

export default TopGamers;
