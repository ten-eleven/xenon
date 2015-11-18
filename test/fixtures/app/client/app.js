angular.module('myApp', [])

.controller("InteractionCtrl", function ($scope, $interval, $http) {

  $scope.messages = [];
  $scope.message = "";
  $scope.user = null;
  $scope.userInput = "";
  $scope.selectedOption = null;

  $scope.sendUser = function() {
    $scope.user = $scope.userInput;
  }

  var loadMessages = function() {
    $http.get('/storage?q=chatMessages').
      success(function(data) {
        $scope.messages = data ? data : [];
      }).
      error(function(err) {
        $scope.messages = ['server request failed with: ' + err];
      });
  }
  var saveMessages = function() {
    var data = {
      key: 'chatMessages',
      value: $scope.messages
    }
    return $http.post('/storage', data);
  };

  $scope.sendMessage = function() {
    $scope.messages.push({user:$scope.user, msg:$scope.message});
    $scope.message = "";
    saveMessages();
  };
  $scope.clearMessages = function() {
    $scope.messages = [];
    saveMessages();
  };

  $scope.updateChanges = function() {
    if ($scope.selectedOption == "clear") {
      $scope.clearMessages()
    } else if ($scope.selectedOption == "logout") {
      $scope.user = null;
    }
    $scope.selectedOption = null;
  }

  $interval(function() {
    loadMessages();
  }, 100);
})
