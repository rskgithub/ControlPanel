app.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$scope', '$auth'];

function RegisterCtrl($scope, $auth) {
  /**
   * Register new user.
   */
  $scope.register = function() {
    $auth.submitRegistration($scope.registerForm)
      .then(function(resp) {
        // Handle success response
        console.log(resp);
      })
      .catch(function(resp) {
        // Handle error response
        console.log(resp);
        $scope.registerErrorMessage = 'Sorry, but uh we couldn\'t find you, try again';
      });
  };
}
