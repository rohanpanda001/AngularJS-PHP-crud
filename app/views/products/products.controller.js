app.controller('productsController', function($scope, $mdDialog, $mdToast, productsFactory){
 
    // read products
    $scope.readProducts = function(){
 
        // use products factory
        productsFactory.readProducts().then(function successCallback(response){
            $scope.products = response.data;
            // console.log($scope.products);
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
 
    }

    // create new product
    $scope.createProduct = function(){
     
        productsFactory.createProduct($scope).then(function successCallback(response){
     
            // tell the user new product was created
            $scope.showToast("New Product Created!");
     
            // refresh the list
            $scope.readProducts();
     
            // close dialog
            $scope.cancel();
     
            // remove form values
            $scope.clearProductForm();
     
        }, function errorCallback(response){
            $scope.showToast("Unable to create record. ");
            // console.log(response);
        });
    }

    //edit product
    $scope.edit = function(id){
        productsFactory.get_data(id).then(function successCallback(response){

            // console.log(response.data[0]);
            $scope.name = response.data[0].Name;
            $scope.description = response.data[0].Description;
            $scope.price = response.data[0].Price;
            $scope.id = response.data[0].ID;

            $mdDialog.show({
                controller: DialogController,
                templateUrl: './app/views/products/edit_product.template.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            });

        }, function errorCallback(response){
            $scope.showToast("Unable to edit record. ");
            // console.log(response);
        });
    }

    $scope.editProduct = function(){
        productsFactory.editProduct($scope).then(function successCallback(response){

            // tell the user new product was created
            $scope.showToast("Product Updated!");
     
            // refresh the list
            $scope.readProducts();
     
            // close dialog
            $scope.cancel();
     
            // remove form values
            $scope.clearProductForm();

        }, function errorCallback(response){
            $scope.showToast("Unable to edit record. ");
            // console.log(response);
        });
    }    


    //delete product
    $scope.delete = function(id) {

        var confirm = $mdDialog.confirm()
            .title('Are you sure?')
            .textContent('Product will be deleted.')
            .targetEvent(event)
            .ok('Yes')
            .cancel('No');

        $mdDialog.show(confirm).then(// 'Yes' button
        function() {
            // if user clicked 'Yes', delete product record
            productsFactory.deleteProduct(id).then(function successCallback(response){

                // tell the user new product was created
                $scope.showActionToast("Product Deleted!");
         
                // refresh the list
                $scope.readProducts();

            }, function errorCallback(response){
                $scope.showToast("Unable to delete record. ");
                // console.log(response);
            });
        },
 
        // 'No' button
        function() {
            // hide dialog
            $mdDialog.cancel();
        });
        
    }

    // clear variable / form values
    $scope.clearProductForm = function(){
        $scope.id = "";
        $scope.name = "";
        $scope.description = "";
        $scope.price = "";
    }

    // show toast message
    $scope.showToast = function(message){
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
                .position("bottom left")
        );
    }

    $scope.showActionToast = function(message) {
        var toast = $mdToast.simple()
          .textContent(message)
          .hideDelay(3000)
          .action('UNDO')
          .highlightAction(true)
          .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
          .position("bottom left");

        $mdToast.show(toast).then(function(response) {
          if ( response == 'ok' ) {
            alert('You clicked the \'UNDO\' action.');
          }
        });
    };
     
    // show 'create product form' in dialog box
    $scope.showCreateProductForm = function(event){
     
        $mdDialog.show({
            controller: DialogController,
            templateUrl: './app/views/products/create_product.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true // Only for -xs, -sm breakpoints.
        });
    }

     
    // DialogController will be here
    function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }
});