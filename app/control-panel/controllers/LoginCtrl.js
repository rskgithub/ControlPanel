app.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$auth', 'AuthService'];

function LoginCtrl($scope, $auth) {
  $scope.login = function() {
    $auth.submitLogin($scope.loginForm)
            .then(function(resp) {
              // Handle success response
              console.log('Logged in!?');
            })
            .catch(function(resp) {
              // Handle error response
              console.log('Obviously got an error response!');
              $scope.loginErrorMessage = 'Sorry, but uh we couldn\'t find you, try again';
            });
  };
}
