title: "Grunt, Connect, JSON API and Cross Domain trouble"
tags:
  - assemble
  - connect
  - cross-domain
  - grunt
  - javascript
  - less
id: 263
categories:
date: 2013-09-06 14:44:34
---

The last couple of months I have been pretty busy, started a new job. Finally, I am now a full-time front-end developer at a big company. In those last months I learned a couple of new things as well. One of them is [Grunt](http://gruntjs.com/ "GruntJS"), an awesome task runner. I used it to build templates, based on Twitter Bootstrap. The very neat part of Grunt is doing everything automatically. Never worrying about minifying your CSS, converting that from LESS, uglifying your Javascript files, and so on. What I didn't knew before was that Grunt as a plugin, called server. It does what it says it does.
&nbsp;
<!--more-->

I decided to take on a old project I did about a year ago. I had to create several HTML templates, and back then I was struggling with it. I created the files using PHP. Looking back at that, and with knowledge of now, I have spend countless hours doing unproductive things that I could have prevented using Grunt. So I decided to dust off the old files, decomposing them and recreate the whole project using Grunt, [Assemble](http://assemble.io/ "Assemble.io - Build Something") and LESS. Just for the sake of experimentation. It took me roughly one day to setup the new project and converting all the old templates to newer handlebar-templates, while extensively using partials. Fun!
&nbsp;
In this particular project I had a JSON API that was being called on the same domain. On production level there were no problems with the Cross-Domain Policy, because it ran on the same domain. The only problem I had: how do I test this on my own computer? Back then I created a small PHP file that would basically tunnel my requests to the domain, using curl. Ofcourse this is not the most ideal solution, but I had no choise. I wasn't in control of the API and so I could not set any policies.
&nbsp;
Now, with Grunt, I was able to run a server (using [Connect](https://github.com/gruntjs/grunt-contrib-connect "grunt-contrib-connect on Github")) from my command-line, while using 'watch' as well. The only problem I had? How to create the tunnel for my JSON api?
&nbsp;
It costed me hours of struggling to find the right plugin, only to find out that there was no plugin that would fit my needs. So, it's time for some oldskool stuff. How to do it? Have a look at this:
&nbsp;
<script src="https://gist.github.com/j3lte/6463805.js"></script>
&nbsp;
So basically, I used the middleware in connect to filter the requests. Any request that are done on **http://localhost/api/** will be forwarded to **http://domain.com/api/**. When the request is done and responds with data and an HTTP 200 header, it forwards the body to my local request.
&nbsp;
_**So, this is my quick and dirty solution. If you have any other ideas how it can be done (I have searched for hours on Google, finding a practical solution), please let me know!**_
&nbsp;
_**Edit: The solution Drew gave me, seems to do the job as well. Have a look at: [https://github.com/drewzboto/grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy "Grunt Connect Proxy on Github")**_