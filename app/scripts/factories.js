app.factory("productsFactory", function($http){
 
    var factory = {};
 
    // read all products
    factory.readProducts = function(){
        return $http({
            method: 'GET',
            url: './app/queries/products/read.php'
        });
    };

    //edit
    factory.get_data = function(id) {
        return $http({
            method: 'GET',
            url: './app/queries/products/get_data.php?id='+id
        })
    }
    factory.editProduct = function($scope) {
        return $http({
            method: 'POST',
            data: {
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1,
                'id' : $scope.id
            },
            url: './app/queries/products/update.php'
        })
    }

    //deleteProduct
    factory.deleteProduct = function(id) {
        return $http({
            method: 'GET',
            url: './app/queries/products/delete.php?id='+id
        })
    }
     
    // createProduct will be here
    factory.createProduct = function($scope){
        return $http({
            method: 'POST',
            data: {
                'name' : $scope.name,
                'description' : $scope.description,
                'price' : $scope.price,
                'category_id' : 1
            },
            url: './app/queries/products/create.php'
        });
    };

     
    return factory;
});