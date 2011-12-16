// --------------------------------------------------------------------------------------------------------------------
//
// connect-uuid.js - Connect middleware to assign a UUID to every request.
//
// Copyright (c) 2011 AppsAttic Ltd - http://www.appsattic.com/
// Written by Andrew Chilton <chilts@appsattic.com>
//
// License: http://opensource.org/licenses/MIT
//
// --------------------------------------------------------------------------------------------------------------------
//
// For example, if you put the UUID on a 50x page, the user can tell you it and then you can grep the logs
// for any messages related to this UUID.
//
// Arguments:
//     - none
//
// --------------------------------------------------------------------------------------------------------------------

var uuid = require('uuid-js');

module.exports = function() {
    return function(req, res, next) {
        req.uuid = uuid.create().toString();
        next();
    };
};

// --------------------------------------------------------------------------------------------------------------------
