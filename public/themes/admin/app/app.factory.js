(function(){
    'use strict';

    angular.module("admin")
        .factory("appFactory", ["$rootScope", "$sce",  "marked", app]);

    function app($rootScope, $sce, marked){
        return {
            buildPage : buildPage,
            getHTML : getHTML,
            getMarkedHTML : getMarkedHTML
        };

        function buildPage(nav){
            var HeaderTitle = '<li><a href="/account">Account</a></li>';
            var title = "Account";
            nav.forEach(function(item){
                HeaderTitle += '<li class="active">' + item + '</li>';
                title += ' / ' + item;
            });

            $rootScope.title = title;
            $rootScope.HeaderTitle = $sce.trustAsHtml(HeaderTitle);
        }

        function getHTML(html){
            return $sce.trustAsHtml(html);
        }

        function getMarkedHTML(html){
            return getHTML(marked(html));
        }
    }
})();