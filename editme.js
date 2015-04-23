/*
Open Notify API: http://api.open-notify.org/iss-now.json
Google Static Maps API: https://maps.googleapis.com/maps/api/staticmap?size=640x480&zoom=3&markers=LATITUDE,LONGITUDE';
*/

var app = angular.module("MapApp", []);

app.controller("MapController", function ($scope, $interval, $http) {

	$http.jsonp('http://api.open-notify.org/iss-now.json?callback=JSON_CALLBACK').
		success(function (data) {
			$scope.map = 'https://maps.googleapis.com/maps/api/staticmap?size=640x480&zoom=3&markers=' + data.iss_position.latitude + ',' + data.iss_position.longitude;
		}).
		error(function(){
			console.log('error');
		});

	$interval(function(){

		$http.jsonp('http://api.open-notify.org/iss-now.json?callback=JSON_CALLBACK').
			success(function (data) {
				$scope.map = 'https://maps.googleapis.com/maps/api/staticmap?size=640x480&zoom=3&markers=' + data.iss_position.latitude + ',' + data.iss_position.longitude;
			}).
			error(function(){
				console.log('error');
			});
	}, 10000);
});