(function(){
	'use strict'

	angular.module('esquina', ['ngRoute'])

	function config ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/post-list.tpl.html',
				controller: 'PostListController',
				controllerAs: 'postlist'
			})
			.when('/order/:orderId', {
				templateUrl: 'views/order-detail.tpl.html',
				controller: 'OrderDetailController',
				controllerAs: 'Orderdetail'
			})
			.when('/new', {
				templateUrl: 'views/post-create.tpl.html',
				controller: 'PostCreateController',
				controllerAs: 'postcreate'
			});
	}

})