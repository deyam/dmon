angular.module('graphApp',[]);

    app.controller('graphController', function($scope){

        // Options

        $scope.width = 600;
        $scope.height = 350;
        $scope.yAxis = 'Sales';
        $scope.xAxis = '2014';

        // Data

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

        // Find Maximum X & Y Axis Values - this is used to position the points as a percentage of the maximum
        $scope.maxY = 0;
        $scope.maxX = 0;

        var arrLength = $scope.points.length;
        for (var i = 0; i < arrLength; i++) {
            // Find Maximum X Axis Value
            if ($scope.points[i].yValue > $scope.maxY)
                $scope.maxY = $scope.points[i].yValue;
            // Find Maximum Y Axis Value
            if ($scope.points[i].xValue > $scope.maxX)
                $scope.maxX = $scope.points[i].xValue;
        }

        // End Controller

});