import {app} from '../../bootstrap';
import ResearchController from './research.ctrl';

app.config(($stateProvider) => {
    $stateProvider.state('research', {
        url: '/research',
        templateUrl: './app/js/research/research.html',
        controller: 'ResearchCtrl',
        controllerAs: 'research'
    });
})
.controller('ResearchCtrl', ResearchController);
