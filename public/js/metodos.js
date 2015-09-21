var node = angular.module('node', []);

var url = 'http://localhost:3000';

node.controller('objetos', function($scope){
   $scope.PESSOA = {
       nome: '',
       sobrenome:''
   }
});

node.controller('pessoa', function($scope,$http){
    $scope.salvar = function(){
        console.log($scope.PESSOA);
        $http.post(url+'/cadastrar',$scope.PESSOA)
            .success(function(r){
                location.reload();
            })

    };
    $scope.retornarTodas = function(){
        $http.get(url+'/retornar')
            .success(function(r){
                $scope.pessoas = r;
            })
    };
    $scope.retornarUma = function(pessoa){
        $scope.pessoa = pessoa;
    }
});