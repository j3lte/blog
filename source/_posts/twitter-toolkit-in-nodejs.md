title: Twitter toolkit in NodeJS
id: 32
date: 2012-12-09 03:24:35
updated: 2012-12-09 03:24:35
tags: [dev]
---
_**Edit (10-05-2014) : Decided to make this one open source, on [Github](https://github.com/j3lte/twitter-toolkit "Twitter toolkit on Github")**_

I love [NodeJS](http://nodejs.org/ "NodeJS"). It has been a blast, learning new stuff every day I work with this great platform. It is currently used in a couple of major websites and will continue to grow to one of the biggest frameworks, if you ask me.

<!--more-->

I like Twitter and I love datamining, so I thought it would be fun to share some things I have been working on. This time, it is a Twitter toolkit.

Basically, what I wanted was a toolkit that provides me with realtime data, or aggregated data on a user. The sky is the limit, I already have plans on writing this into a full blown server app that will do the analysis, fully automated. Aggregating Twitter data from a user, analyzing all the keywords and links provides you with a more detailed profile on a person. Sounds like a fun project? It's part of social engineering and profiling, and I like to do these kind of things.

So here it is, my app.js. It could be more abstract, creating multiple includes and requires. For now, it is just a work in progress, I like to have it all in one single file. A big chuck of this code was rewritten by [Jasper](https://twitter.com/JvdMeulen), I reused his setup.

## What can you do with it?

- Searching for keywords ( _**#node app.js search &lt;keywords&gt;**_ ) of from and to a user ( _**#node app.js search from:@user @user**_ )
- Looking at a stream of data, filtered on keywords (_** #node app.js stream &lt;keywords&gt;**_ )
- Lookup a user ( _**#node app.js lookup &lt;user&gt;**_ )
- Check trends ( _**#node app.js trends 1**_ ), for now I included the woeid from the Netherlands as option 2\. (A WoeID = Where On Earth ID, [created by Yahoo](http://developer.yahoo.com/geo/geoplanet/guide/concepts.html "WoeID Key Concepts"). I found the id using [this tool](http://woeid.rosselliot.co.nz/ "WoeID lookup"))
- Dump the tweets from a user ( _**#node app.js dump &lt;user&gt;**_ )

Dumping tweets is fun. You could put them into a database and analyse it. Twitter API allows you to dump  approximately 3200 tweets. In most cases it will not be this amount of tweets, but a lot less (because tweets get deleted, etcetera, if I recall this right).

## What do you need?

- [NodeJS](http://nodejs.org/ "NodeJS"), obviously
- Twitter module from Tolga Tezel ([ttezel @ Github](https://github.com/ttezel)), that can be found [here](https://github.com/ttezel/twit "Twit on Github"). Install it: #npm install twit
- A Twitter app. Create one here, and insert the keys in the app.js (on line 24-27)

## Credits and mentions

- Credits to [@JvdMeulen](https://twitter.com/JvdMeulen "Jasper @ Twitter"), he created a big chuck of this code. Great job, Jasper! Hope to see more of your work at [logt.nu](http://logt.nu/)
- This little piece of code inspired [@Legosteentje](https://twitter.com/Legosteentje "Legosteentje @ Twitter") to create a realtime 'sneeuw'-tracker, using NodeJS and SocketIO. Can be found [here](http://sneeuw.twitterconsole.com/ "Sneeuw Twitterconsole").

## The code:

_**Edit (10-05-2014):**_

_**Code is removed. Revised version can be found here: [https://github.com/j3lte/twitter-toolkit/blob/master/app.js](https://github.com/j3lte/twitter-toolkit/blob/master/app.js)**_

Have fun with it! If you have any questions, feel free to ask! I will provide a Github link when my code is more advanced. Hit me up [on Twitter](http://twitter.com/j3lte "Jelte on Twitter") if you can help me creating a better code!

More will follow in the near future....
