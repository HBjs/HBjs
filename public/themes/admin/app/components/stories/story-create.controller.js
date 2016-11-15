(function(){
    'use strict';

    angular.module("admin")
        .config(['$routeProvider', StoryCreateRoute])
        .controller("StoryCreate", ["appFactory", "$rootScope", StoryCreate]);

    function StoryCreateRoute($routeProvider) {
        $routeProvider.
            when('/account/stories/create', {
                templateUrl: '/themes/admin/app/components/stories/story-create.html',
                controller: 'StoryCreate',
                controllerAs: 'vm'
            });
    }

    function StoryCreate(appFactory, $rootScope){
        var vm = this;

        appFactory.buildPage(["Stories", "Create story"]);



        vm.post = {
            title : "",
            content : "## Article"

        };

        $rootScope.$watch(function (){
            return vm.post.content;
        }, function(e){
            vm.generatedContent = appFactory.getMarkedHTML(e);
        });


    }
})();