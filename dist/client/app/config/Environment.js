/**
 * Created by Justin on 9/2/16.
 */
"use strict";
exports.ENV = window.location.hostname.indexOf('local') === -1 ?
    'production' :
    'development';
