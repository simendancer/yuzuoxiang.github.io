/**
 * Created by Administrator on 1/6 0006.
 */
angular.module('myApp',[
    'ngRoute',
    'myApp.view1'
]).
config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({redirectTo:'/test'})
}])