var app = angular.module('esquinaApp', [])

app.controller('menuCtrl', function($scope){

	$scope.menu = menuData;

	$scope.pedido = [];
	$scope.totalPedido = 0;

	$scope.fnAddItem = _fnAddItem;
	function _fnAddItem(item){
		$scope.pedido.push(item)
		sumaTotalPedido(item.price);
		console.log($scope.pedido)
	}

	$scope.fnDelItem = _fnDelItem;
	function _fnDelItem(index, item){
		// var index = $scope.pedido.indexOf(item.description);
		// if (index > -1) {
  		$scope.pedido.splice(index, 1);
  		$scope.totalPedido = $scope.totalPedido - item.price
		// }
	}

	function sumaTotalPedido(price){
		$scope.totalPedido = $scope.totalPedido + price
	}

	$scope.fnEnviar = _fnEnviar;
	function _fnEnviar(){
		return true;
	}

	$scope.fnCancelar = _fnCancelar;
	function _fnCancelar(){

	}

});


var menuData = [{
			"description": "Café americano"
			, "price": 5
		},
		{
			"description": "Café con leche"
			, "price": 7
		},
		{
			"description": "Sandwich de jamón y queso"
			, "price": 10
		},
		{
			"description": "Jugo natural"
			, "price": 7
	}]