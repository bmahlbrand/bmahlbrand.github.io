import {app} from '../../bootstrap';
import HeaderController from './header.ctrl';

app.directive('header', () => {
    return {
        templateUrl: './app/js/header/header.html',
        controller: 'HeaderCtrl',
        controllerAs: 'header'
    };
})
.controller('HeaderCtrl', HeaderController);
