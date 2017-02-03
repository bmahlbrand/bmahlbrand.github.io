import {app} from '../../bootstrap';
import FooterController from './footer.ctrl';

app.directive('footer', () => {
    return {
        templateUrl: './app/js/footer/footer.html',
        controller: 'FooterCtrl',
        controllerAs: 'footer'
    };
})
.controller('FooterCtrl', FooterController);
