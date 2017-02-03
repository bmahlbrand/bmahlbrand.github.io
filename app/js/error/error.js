import {app} from '../../bootstrap';

app.config(($stateProvider) => {
    $stateProvider.state('404', {
        templateUrl: './app/js/error/404.html'
    });
});
