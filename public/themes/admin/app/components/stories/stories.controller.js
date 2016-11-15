(function(){
    'use strict';

    angular.module("admin")
        .config(['$routeProvider', StoriesRoute])
        .controller("Stories", ["$location", "appFactory", Stories]);

    function StoriesRoute($routeProvider) {
        $routeProvider.
            when('/account', {
                templateUrl: '/themes/admin/app/components/stories/stories.html',
                controller: 'Stories',
                controllerAs: 'vm'
            });
    }

    function Stories($location, appFactory){
        var vm = this;

        appFactory.buildPage(["Stories"]);

        vm.goToCreatePost = goToCreatePost;


        function goToCreatePost(){
            $location.path("/account/stories/create");
        }
    }
})();