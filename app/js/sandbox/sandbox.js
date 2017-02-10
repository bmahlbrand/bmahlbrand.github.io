import {app} from '../../bootstrap';
import SandboxController from './sandbox.ctrl';

app.config(($stateProvider) => {
    $stateProvider.state('sandbox', {
        url: '/sandbox',
        templateUrl: './app/js/sandbox/sandbox.html',
        controller: 'SandboxCtrl',
        controllerAs: 'sandbox'
    });
})
.controller('ProjectsCtrl', SandboxController);
