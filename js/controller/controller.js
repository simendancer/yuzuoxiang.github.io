/**
 * Created by Administrator on 1/6 0006.
 */
angular.module("myApp.view1",['ngRoute'])

.config(['$routeProvider',
    function($routeProvider){       //配置路由，用于页面切换
        $routeProvider.
        when('/',{          //url
            templateUrl:"view/home.html",       //页面真实路径
            controller:"HomeController"
        })
        .otherwise({       //默认路径跳转
            redirectTo:"/"
        })
    }
])

.controller("HomeController",function($scope){
    $scope.ddd="测试成功！";
    $scope.data=[
        {name:"黄源",dd:"我不是人"},{name:"黄源",dd:"是狗"},
        {name:"黄源",dd:"我不是人"},{name:"黄源",dd:"是狗"},
        {name:"黄源",dd:"我不是人"},{name:"黄源",dd:"是狗"},
    ]
})


