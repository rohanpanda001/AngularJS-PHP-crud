'use strict';


app.config(function($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/home');

	    $stateProvider
	        .state('home', {
	            url: '/home',
	            templateUrl: './app/views/home/home.html'
	        })
		    .state('home.list', {
		        url: '/list',
		        templateUrl: './app/views/home/home-list.html',
		        controller: function($scope) {
		            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
		        }
		    })
		    .state('home.paragraph', {
		        url: '/paragraph',
		        template: 'I could sure use a drink right now.'
		    })
	        .state('about', {
	            // we'll get to this in a bit
	            url: '/about',
	            templateUrl: './app/views/home/about.html'       
	        })
	        .state('access', {
                url: '/access',
                template: '<div class="bg-white bg-big"><div ui-view class="fade-in-down smooth"></div></div>',
            })
            .state('access.signin', {
                url: '/signin',
                templateUrl: './app/views/access/signin.html',
                controller: 'SigninCtrl',
            })
            .state('access.signup', {
                url: '/signup',
                templateUrl: './app/views/access/signup.html',
                controller: 'SignupCtrl'
            })
            .state('products', {
                url: '/products',
                template: '<div class="bg-white bg-big"><div ui-view class="fade-in-down smooth"></div></div>',
            })
            .state('products.read', {
                url: '/read',
                templateUrl: './app/views/products/read_products.template.html',
                controller: 'productsController'
            })
            ;
	});