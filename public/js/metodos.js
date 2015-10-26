var node = angular.module('node', []);

var url = 'http://localhost:3000';

node.controller('objetos', function($scope){
   $scope.PESSOA = {
       nome: '',
       sobrenome:'',
       tel: []
   }
    $scope.TELEFONE = {
        ddd:'',
        numero:""
    }
    $scope.ENDERECO = {
        rua: '',
        bairro:'',
        idPessoa:''
    }
});

node.controller('pessoa', function($scope,$http){
    $scope.salvar = function(){
        console.log($scope.PESSOA);
        $scope.PESSOA.tel.push($scope.TELEFONE);
        $scope.PESSOA.end.push($scope.ENDERECO);
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
        localStorage.setItem('pessoa', JSON.stringify(pessoa));
        $scope.pessoa = pessoa;
    };
    $scope.salvarEndereco = function(){
        var user = JSON.parse(localStorage.getItem('pessoa'));
        $scope.ENDERECO.idPessoa = user._id;
        $http.post(url+'/cadastrarEndereco',$scope.ENDERECO)
            .success(function(r){
                location.reload();
            })
    }
});