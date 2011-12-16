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

    var uuid = require('connect-uuid');
    uuid(); // returns middleware which sets req.uuid

In some other code:

    logMe(req.uuid, 'Something bad happened');

# Motivation #

When you have so many requests, it's hard to grep (search, find, etc) the logs to figure out what went wrong when you
get a bad request. connect-uuid to the rescue.

Add this module as connect middleware and each request has a UUID. When you log anything, make sure you log this UUID
with it. When you get an error in your application, make sure you use the UUID when reporting it (whether that is
logged, email or whatever). Also, tell the user (in their 50x page) what the UUID is when something goes wrong, so that
they can tell you to sort things out.

By doing all this, you can easily find the request and what really happened to it. You maye keep detailed or slight
logs, but either way will really help.

Then you can grep or even select from your logs for that UUID!

For example, when using winston-simpledb, you might be able to select those logs with:

    SELECT * FROM logs WHERE uuid = 'xxxxxxxx-xxxx-xxxx--xxxx-xxxxxxxxxxxx';

:)

# Author #

Written by [Andrew Chilton](http://www.chilts.org/blog/)

Copyright 2011 [AppsAttic](http://www.appsattic.com/)

# License #

MIT. See LICENSE for more details.
