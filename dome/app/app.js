var app=angular.module("myapp",["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state("state",{
            url:"/shop",
            templateUrl:"content/view/shop.html",
            controller:"shopcontroller"
        });
        $urlRouterProvider.otherwise("/shop");
});
