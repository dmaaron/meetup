app.controller('meetupsCtrl', ['$scope', '$resource',
    function ($scope, $resource){

    $scope.meetups = [
        {name: "Meetup #1"},
        {name: "Meetup #2"},
        {name: "Meetup #3"},
        {name: "Meetup #4"}
    ];

    $scope.createMeetup = function() {
        $scope.meetups.push({ name: $scope.meetupName });
        $scope.meetupName = '';
    };

}]);

