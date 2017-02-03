import {app} from '../../bootstrap';
import GalleryController from './gallery.ctrl';

app.config(($stateProvider) => {
    $stateProvider.state('gallery', {
        url: '/gallery',
        templateUrl: './app/js/gallery/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
    });
})
.controller('GalleryCtrl', GalleryController);
