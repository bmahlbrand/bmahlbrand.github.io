import {app} from '../../bootstrap';
import ContentController from './content.ctrl';

app.directive('content', () => {
    return {
        templateUrl: './app/js/content/content.html',
        controller: 'ContentCtrl',
        controllerAs: 'content'
    };
})
.controller('ContentCtrl', ContentController);
