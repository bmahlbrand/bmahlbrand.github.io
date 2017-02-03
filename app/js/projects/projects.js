import {app} from '../../bootstrap';
import ProjectsController from './projects.ctrl';

app.config(($stateProvider) => {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: './app/js/projects/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
    });
})
.controller('ProjectsCtrl', ProjectsController);
