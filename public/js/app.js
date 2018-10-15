var app = angular.module('esquinaApp', [])

app.controller('menuCtrl', function($scope){

	$scope.menu = menuData;

	$scope.pedido = [];
	$scope.totalPedido = 0;
	$scope.frm = {}
	$scope.envios = []

	$scope.fnAddItem = _fnAddItem;
	function _fnAddItem(item){
		$scope.pedido.push(item)
		sumaTotalPedido(item.price);
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
		if(angular.isUndefined($scope.frm.mCliente)){
			alert("Debe ingresar el nombre del cliente")
		}else{
			if($scope.pedido.length == 0)
				alert("Debe elegir por lo menos un item antes de enviar")
			else{
				var envio = {
					"cliente": $scope.frm.mCliente
					, "pedido": $scope.pedido 
				}
				$scope.envios.push(envio)
				console.log($scope.envios)
				_fnCancelar();
		
			}
		}
	}

	$scope.fnCancelar = _fnCancelar;
	function _fnCancelar(){
		$scope.frm.mCliente = undefined;
		$scope.pedido = []
		$scope.totalPedido = 0;	
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