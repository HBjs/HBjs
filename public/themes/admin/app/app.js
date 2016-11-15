(function(){
    'use strict';

    var dependencies = ["ngResource", "ngRoute", "ngAnimate", "toastr", "hc.marked"];

    angular.module("admin", dependencies)
        .config(["$interpolateProvider", configInterpolate])
        .config(["toastrConfig", configToastr])
        .config(["$locationProvider", configLocation]);

    /**
     * Interpolate configs
     **/
    function configInterpolate($interpolateProvider){
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    }

    /**
     * Toastr configs
     **/
    function configToastr (toastrConfig) {
        angular.extend(toastrConfig, { allowHtml: true, closeButton: true, positionClass : "toast-bottom-right" });
    }

    /**
     * Location configs
     **/

    function configLocation($locationProvider){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $locationProvider.hashPrefix('!');
    }
})();