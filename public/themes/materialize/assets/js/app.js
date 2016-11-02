/*!
 * HB.js
 * Copyright(c) 2016 HB.js Team
 * MIT Licensed
 */

(function(){
    'use strict';

    function removeBadUrl(){
        if(window.location.href.match("#")){
            window.location.href = '/';
        }
    }

    removeBadUrl();

})();