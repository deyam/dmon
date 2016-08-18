angular.module("app", ["chart.js"])
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

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };


        $scope.points = [
            {
                label: 'January',
                xValue: 1,
                yValue: 36
            },
            {
                label: 'February',
                xValue: 2,
                yValue: 54
            },
            {
                label: 'March',
                xValue: 3,
                yValue: 62
            },
            {
                label: 'April',
                xValue: 4,
                yValue: 82
            },
            {
                label: 'May',
                xValue: 5,
                yValue: 96
            },
            {
                label: 'June',
                xValue: 6,
                yValue: 104
            },
            {
                label: 'July',
                xValue: 7,
                yValue: 122
            },
            {
                label: 'August',
                xValue: 8,
                yValue: 152
            },
            {
                label: 'September',
                xValue: 9,
                yValue: 176
            },
            {
                label: 'October',
                xValue: 10,
                yValue: 180
            },
            {
                label: 'November',
                xValue: 11,
                yValue: 252
            },
            {
                label: 'December',
                xValue: 12,
                yValue: 342
            }
        ];


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