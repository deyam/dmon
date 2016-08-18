angular.module("app2", ["chart.js"])
// Optional configuration
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            chartColors: ['#FF5252', '#FF8A80'],
            responsive: false
        });
        // Configure all line charts
        ChartJsProvider.setOptions('line', {
            showLines: false
        });
    }])
    .controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

        $scope.labels = ["10", "11", "12", "13", "14", "15","16","17","18"];
        // $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [5,12,13,20,33,77,120,7,50]
            // [65, 59, 80, 81, 56, 55, 40],
            // [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };




        $scope.width = 600;
        $scope.height = 350;
        $scope.yAxis = 'Sales';
        $scope.xAxis = '2014';

        // Simulate async data update
        $timeout(function () {
            $scope.data = [
                [28, 48, 40, 19, 86, 27, 90],
                [65, 59, 80, 81, 56, 55, 40]
            ];
        }, 3000);
    }]);