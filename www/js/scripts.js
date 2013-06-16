  var demoApp = angular.module('demoApp', []);

  var controllers = {};

  var urlBase ='';
  var brandSelected;

     demoApp.config(function ($routeProvider) {
        $routeProvider
            .when('/loby',
                {
                    controller: 'enviromentController',
                    templateUrl: urlBase + 'partials/home.html'
                })
            //Define a route that has a route parameter in it (:customerID)
            .when('/brand/:brandId',
                {
                    controller: 'enviromentController',
                    templateUrl: urlBase + 'partials/brand.html'
                })
            .when('/login',
                {
                    controller: 'loginController',
                    templateUrl: urlBase + 'partials/login.html'
                })
            .when('/splash',
                {
                    controller: 'splashController',
                    templateUrl: urlBase + 'partials/splash.html'
                })
            .otherwise({ redirectTo: '/loby' });
    });

    demoApp.factory('enviromentFactoryList', function ($route, $routeParams) {
        var brandId = $routeParams.brandId;
        var factory = {};
        var brands = [
			{ name: 'Buick', 
             id: 1,
             img:'img/Buick-Logo.png',
             data :[{
                url: 'http://buick.com.itl03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'itl03',
                seg: 'seg1'
             }, 
             {
                url: 'http://buick.com.dev03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'dev03',
                seg: 'seg1'
             }],
            },
            { name: 'Cadillac', 
             id: 2,
             img:'img/cadillac-logo-95x60b.png',
             data :[{
                url: 'http://buick.com.itl03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'itl03',
                seg: 'seg1'
             }, 
             {
                url: 'http://buick.com.dev03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'dev03',
                seg: 'seg1'
             }],
            },
			{ name: 'Chevrolet', 
             id: 3,
             img:'img/2012-chevrolet-homepage-logo-54x18.png',
             data :[{
                url: 'http://buick.com.itl03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'itl03',
                seg: 'seg1'
             }, 
             {
                url: 'http://buick.com.dev03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'dev03',
                seg: 'seg1'
             }],
            },
            { name: 'GMC', 
             id: 4,
             img:'img/GMC-logo139x29.png',
             data :[{
                url: 'http://buick.com.itl03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'itl03',
                seg: 'seg1'
             }, 
             {
                url: 'http://buick.com.dev03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'dev03',
                seg: 'seg1'
             }],
            },
           { name: 'GM Fleet', 
             id: 5,
             img:'img/gm_logo.png',
             data :[{
                url: 'http://buick.com.itl03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'itl03',
                seg: 'seg1'
             }, 
             {
                url: 'http://buick.com.dev03-www-seg1.gmds.plusline.net/',
                user: 'tempwww',
                password: 'ntAWYGkbXkFL',
                env: 'dev03',
                seg: 'seg1'
             }],
            }
        ];

        factory.getBrands = function () {
            //Can use $http object to retrieve remote data
            //in a "real" app
            var login = true;
            if(login == true){
                return brands;    
            }else{
                return 0;
            }
            
        };

        factory.getBrandId = function (brandId) {
            //Can use $http object to retrieve remote data
            //in a "real" app
            return brands;
        };
        return factory;
    });


    controllers.enviromentController = function ($scope, $route, $routeParams, enviromentFactoryList) {
        $scope.brands = {};
        $scope.$routeParams = $routeParams;
        $scope.brandId = $routeParams.brandId;
        //console.log($scope.brandId);

        init();
        function init() {
           $scope.brands = enviromentFactoryList.getBrands();

        }

        /*    
        $scope.addCustomer = function () {
            $scope.customers.push(
			{
			    name: $scope.inputData.name,
			    city: $scope.inputData.city
			});
        }
        */
    };

    controllers.loginController = function($scope, $route, $routeParams, enviromentFactoryList){

    }

    demoApp.controller(controllers);

