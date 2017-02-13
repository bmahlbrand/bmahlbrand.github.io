function ProjectsController($scope, $http) {

    $scope.projectList = null;
    $scope.tags = null;
    $scope.currentIndex = 0;

    $http({

        method: 'GET',
        url: '/data/projects/'

    }).then((response) => {

        $scope.projectList = response.data;
        $scope.setProject();

    }, (response) => {

        $scope.message = 'failed';
        console.log(response);

    });

    $scope.selectProject = function($event, title) {

        console.log(title);

        for (let i = 0;i < $scope.projectList.length;i++) {
            if ($scope.projectList[i].title === title) {
                $scope.currentIndex = i;
                break;
            }
        }

        $scope.setProject();
    };

    $scope.setProject = function() {

        $scope.projectName = $scope.projectList[$scope.currentIndex].title;
        $scope.projectDescription = $scope.projectList[$scope.currentIndex].description;
        $scope.projectLink = $scope.projectList[$scope.currentIndex].link;
        $scope.projectDate = $scope.projectList[$scope.currentIndex].dates;
        $scope.tags = $scope.projectList[$scope.currentIndex].tags;

    };

    $scope.prevProject = function() {

        if ($scope.currentIndex === 0) {
            $scope.currentIndex = $scope.projectList.length - 1;
        } else {
            $scope.currentIndex--;
        }

        $scope.setProject();
    };

    $scope.nextProject = function() {

        if ($scope.currentIndex >= $scope.projectList.length - 1) {
            $scope.currentIndex = 0;
        } else {
            $scope.currentIndex++;
        }

        $scope.setProject();
    };

};

export default ['$scope', '$http', ProjectsController];
