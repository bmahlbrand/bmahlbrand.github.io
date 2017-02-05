import {app} from './bootstrap';
import './js/header/header';
import './js/footer/footer';
import './js/content/content';
import './js/error/error';
import './js/index/index';
import './js/research/research';
import './js/projects/projects';
import './js/blog/blog';
import './js/gallery/gallery';

app.config(($stateProvider) => {
    $stateProvider.state('resume', {
        url: '/resume'
    });
});
// app.run(['$rootScope', function($scope) {
// }]);
