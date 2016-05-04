angular.module('atlasDemo').controller('LayoutController', ['$scope', '$timeout', 'mainApp', function($scope, $timeout, mainApp) {
    $scope.config = {
        flow: 'column'
    };


    $scope.layout = {
        bottom: false,
        rightSide: false,
        leftSide: false
    };


    $scope.toggle = function (which) {
        $scope.layout[which] = !$scope.layout[which];
    };

    $scope.close = function (which) {
        $scope.layout[which] = true;
    };

    $scope.open = function (which) {
        $scope.layout[which] = false;
    };

    $scope.$on('ui.layout.toggle', function () {
        mainApp.emit('ui.layout.toggle', $scope);
    });

    $scope.$on('ui.layout.resize', function () {
        mainApp.emit('ui.layout.resize', $scope);
    });

    mainApp.on('ui.layout.forcedUpdate', function () {
        $timeout(function () {
            $scope.updateDisplay();
            mainApp.emit('ui.layout.resize');
        },10);
    });

}]);
