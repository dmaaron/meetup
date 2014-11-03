app.controller('meetupsCtrl', ['$scope', '$resource', function ($scope, $resource){
    var Meetup = $resource('/api/meetups');

    $scope.meetups = [
        {name: "Meetup #1"},
        {name: "Meetup #2"},
        {name: "Meetup #3"},
        {name: "Meetup #4"}
    ];

    $scope.createMeetup = function() {
        var meetup = new Meetup();
        meetup.name = $scope.meetupName;
        meetup.$save();
    };

}]);

