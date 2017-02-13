function BlogController($scope, $http, $sce) {

    $scope.posts = null;

    $scope.currentPost = {};
    $scope.currentIndex = 0;

    $http({

        method: 'GET',

        url: '/data/posts/'

        // url: 'benjamin.ahlbrand.me:27017/blog/posts'

    }).then((response) => {

        $scope.posts = response.data;

        $scope.setProject();

    }, (response) => {

        $scope.message = 'failed';

        console.log(response);

    });

    $scope.renderHtml = function(html) {
        return $sce.trustAsHtml(html);
    };

    $scope.setProject = () => {

        $scope.currentPost.title = $scope.posts[$scope.currentIndex].title;
        $scope.currentPost.date = $scope.posts[$scope.currentIndex].date;
        $scope.currentPost.body = $scope.posts[$scope.currentIndex].body;
        $scope.currentPost.abstract = $scope.posts[$scope.currentIndex].abstract;
        $scope.currentPost.tags = $scope.posts[$scope.currentIndex].tags;

    };

    $scope.selectPost = function($event, title) {

        console.log(title);

        for (let i = 0;i < $scope.posts.length;i++) {
            if ($scope.posts[i].title === title) {
                $scope.currentIndex = i;
                break;
            }
        }

        $scope.setProject();
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
