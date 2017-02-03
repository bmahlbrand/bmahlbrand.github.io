function BlogController($scope, $http) {

    $scope.posts = null;
    $scope.tags = null;

    $scope.currentIndex = 0;

    $http({

        method: 'GET',

        url: 'posts.json'

        // url: 'benjamin.ahlbrand.me:27017/blog/posts'

    }).then((response) => {

        $scope.posts = response.data;

        $scope.setProject();

    }, (response) => {

        $scope.message = 'failed';

        console.log(response);

    });

    $scope.setProject = () => {

        $scope.projectName = $scope.posts[$scope.currentIndex].title;
        $scope.projectDescription = $scope.posts[$scope.currentIndex].description;
        $scope.projectLink = $scope.posts[$scope.currentIndex].link;
        $scope.projectDate = $scope.posts[$scope.currentIndex].dates;
        $scope.tags = $scope.posts[$scope.currentIndex].tags;

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

    $scope.comment = () => {

    };

    $scope.like = () => {

    };

    $scope.addPost = () => {

        /*
        blog.post.createdOn = Date.now();
        blog.post.comments = [];
        blog.post.likes = 0;
        blog.posts.unshift(this.post);
        blog.tab = 0;
        blog.post = {};
        */
    };
}

export default ['$scope', '$http', BlogController];

// var app = angular.module('ahlbrand.blog', []);
