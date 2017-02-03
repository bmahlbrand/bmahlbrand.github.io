import {app} from '../../bootstrap';
import IndexController from './index.ctrl';

app.config(($stateProvider) => {
    $stateProvider.state('index', {
        url: '/index',
        templateUrl: './app/js/index/index.html',
        controller: 'IndexCtrl',
        controllerAs: 'index'
    });
})
.controller('IndexCtrl', IndexController);
