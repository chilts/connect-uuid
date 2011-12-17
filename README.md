```
 _______  _______  _        _        _______  _______ _________                      _________ ______  
(  ____ \(  ___  )( (    /|( (    /|(  ____ \(  ____ \\__   __/    |\     /||\     /|\__   __/(  __  \ 
| (    \/| (   ) ||  \  ( ||  \  ( || (    \/| (    \/   ) (       | )   ( || )   ( |   ) (   | (  \  )
| |      | |   | ||   \ | ||   \ | || (__    | |         | | _____ | |   | || |   | |   | |   | |   ) |
| |      | |   | || (\ \) || (\ \) ||  __)   | |         | |(_____)| |   | || |   | |   | |   | |   | |
| |      | |   | || | \   || | \   || (      | |         | |       | |   | || |   | |   | |   | |   ) |
| (____/\| (___) || )  \  || )  \  || (____/\| (____/\   | |       | (___) || (___) |___) (___| (__/  )
(_______/(_______)|/    )_)|/    )_)(_______/(_______/   )_(       (_______)(_______)\_______/(______/ 
                                                                                                       
```

Connect middleware which assigns a UUID to every request.

# Usage #

    $ npm install connect-uuid

    // load connect-uuid
    var uuid = require('connect-uuid');

    // use the middleware which sets req.uuid
    app.use(uuid());

    // add a dynamic helper so the view can see #{uuid}
    app.dynamicHelpers({
      uuid: function(req, res) {
        return req.uuid;
      },
    });

## Uses of a UUID for each Request ##

Log the UUID in your log files to help you figure out what is going on:

    // in your logging
    myLogger(req.uuid + ' : Something bad happened.');

Tell the user the UUID for the failed request, and get them to use it as a reference when they report the issue to you
(note: this is a Jade template):

    p Your reference is '#{uuid}'.

Send yourself the uuid of the (failied) requests so you can find it quicker:

    To: me@example.com
    From: noreply@example.com
    Subject: 50x error
    
    A web request (94a56740-539c-4f66-99dd-99bf80b0d5e7) failed.

You may even store the requests and/or errors in your database:

    sql> SELECT * FROM request WHERE uuid = 'b2bc553a-108e-4e71-8d01-9152ffaf0f5c';

And there are many other uses too.

# Motivation #

When you have so many requests, it's hard to grep (search, find, etc) the logs to figure out what went wrong when you
get a bad request. connect-uuid to the rescue.

Add this module as connect middleware and each request has a UUID. When you log anything, make sure you log this UUID
with it. When you get an error in your application, make sure you use the UUID when reporting it (whether that is
logged, email or whatever). Also, tell the user (in their 50x page) what the UUID is when something goes wrong, so that
they can tell you to sort things out.

By doing all this, you can easily find the request and what really happened to it. You may keep detailed or light logs,
but either way having a direct reference to the request will really help.

## Note ##

This module was inspired by this email by Matt Sargeant to the NodeJS mailing list:
https://groups.google.com/d/msg/nodejs/2NcBM7eXD94/FVm-jL91cekJ

# Author #

Written by [Andrew Chilton](http://www.chilts.org/blog/)

Copyright 2011 [AppsAttic](http://www.appsattic.com/)

# License #

MIT. See LICENSE for more details.
