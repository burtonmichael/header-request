var app = angular.module('app', []);

app.factory('LanguagesService', ['$http', '$q', function($http, $q){
	return function get(){
		var promise = null;
		if (promise) {
			return promise;
		} else {
			var defer = $q.defer();
			var promise = $http.get('js/languages.json', { cache: 'true'})
				.success(function(data) {
					defer.resolve(data);
				});

			return defer.promise;
		}
	};
}])

app.controller('mainCtrl', ['$scope', 'LanguagesService', function($scope, LanguagesService){
	$scope.main = {};

	LanguagesService().then(function(data){
		$scope.languages = data
	});

	$scope.generated = false;

	$scope.back = function() {
		$scope.generated = false;
	}

	$scope.generate = function() {
		$scope.generated = true;
	}
}])