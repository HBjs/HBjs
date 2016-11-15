(function(){
    'use strict';

    var html = jQuery("html");
    var sidebar = jQuery(".sidebar");

    html.on("click", ".sidebar-toggle", function(e){
        e.preventDefault();

        var body = $("body");

        if(body.hasClass("sidebar-collapsed")){
            body.removeClass("sidebar-collapsed");
        }else{
            body.addClass("sidebar-collapsed");
        }
    });

})();