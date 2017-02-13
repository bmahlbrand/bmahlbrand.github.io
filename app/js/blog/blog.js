import {app} from '../../bootstrap';
import BlogController from './blog.ctrl';

app.config(($stateProvider) => {
    $stateProvider.state('blog', {
        url: '/blog',
        templateUrl: './app/js/blog/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
    });
})
.controller('BlogCtrl', BlogController)
.filter('unsafe', ($sce) => {
    return $sce.trustAsHtml;
});
