function GalleryController($scope, $http, $interval) {

    $scope.posts = null;
    $scope.tags = null;

    let stopTime = null;

    $scope.currentIndex = 0;

    $http({

        method: 'GET',

        url: 'pix.json'

        // url: 'benjamin.ahlbrand.me:27017/blog/posts'

    }).then((response) => {

        $scope.posts = response.data;

        $scope.setProject();

    }, (response) => {

        $scope.message = 'failed';

        console.log(response);

    });

    $scope.setProject = () => {

        $scope.link = $scope.posts[$scope.currentIndex].link;
        $scope.tags = $scope.posts[$scope.currentIndex].tags;

        if (stopTime) {
            $interval.cancel(stopTime);
        }

        stopTime = $interval($scope.nextProject, 10000);

        // listen on DOM destroy (removal) event, and cancel the next UI update
        // to prevent updating time after the DOM element was removed.

        // $scope.projectDate = $scope.posts[$scope.currentIndex].dates;

    };

    $scope.prevProject = () => {

        if ($scope.currentIndex === 0) {
            $scope.currentIndex = $scope.posts.length - 1;
        } else {
            $scope.currentIndex--;
        }

        $scope.setProject();
    };

    $scope.nextProject = () => {

        if ($scope.currentIndex >= $scope.posts.length) {
            $scope.currentIndex = 0;
        } else {
            $scope.currentIndex++;
        }

        $scope.setProject();
    };

    $scope.$on('$destroy', () => {
        $interval.cancel(stopTime);
    });
}

export default ['$scope', '$http', '$interval', GalleryController];

// var app = angular.module('ahlbrand.blog', []);
