import angular from 'angular';

let boardModule = angular.module('app.board', []);

// Route Config
import BoardConfig from './board.config';
boardModule.config(BoardConfig);

// Controllers
import BoardCtrl from './board.controller';
boardModule.controller('BoardCtrl', BoardCtrl);

// Controllers
import TopGamers from './top/top.component';
boardModule.component('topGamers', TopGamers);

export default boardModule;
