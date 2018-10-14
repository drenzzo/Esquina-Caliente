(function(){
	'use strict'

	angular.module('esquina', ['ngRoute', 'esquina.controllers'])

	function config ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/menu-list.tpl.html',
				controller: 'MenuListController',
				controllerAs: 'menulist'
			})
			.when('/order/:orderId', {
				templateUrl: 'views/order-detail.tpl.html',
				controller: 'OrderDetailController',
				controllerAs: 'orderdetail'
			})
			.when('/new', {
				templateUrl: 'views/post-create.tpl.html',
				controller: 'PostCreateController',
				controllerAs: 'postcreate'
			});
	}

	angular
		.module('esquina')
		.config(config);

})();