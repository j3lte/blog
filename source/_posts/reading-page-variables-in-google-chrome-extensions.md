title: Reading page variables in Google Chrome extensions
date: 2015-06-06 13:37:51
tags: [dev]
---
Recently I have been developing two Chrome Extensions for a contractor. This is a fun way to learn new things, especially about the API used.

For one of those Extensions I needed to perform a few checks on a page, reading variables in the page. There is only one problem: The way Chrome Extensions work is that their contentscripts (either defined by the manifest.json or as an executed script) are running in their [_own world_](https://developer.chrome.com/extensions/content_scripts#execution-environment).

I found a workaround that I hosted on [Github](https://gist.github.com/j3lte/13cdfcc15868f6cc5d41)

<!--more-->

``popup-snippet.js`` is a snippet of the popup script. The function ``performTests`` will first query chrome for the current Tab that is opened. Next, on the current tab it injects ``variable-checker.js`` and execute it. The variable checker will inject dynamic scripts in the page that are able to read the variables.

As you can see the variable-checker is a simple script that actually does a very ugly thing, but it works. It reads content of the dynamically generated divs, which contains the output of the dynamically generated scripts. These scripts do have access to the page variables (in this case it tries to read the version of jQuery and window.et)

If it is able to read a variable, it will return the content of it. If not, it will return null.

<script src="https://gist.github.com/j3lte/13cdfcc15868f6cc5d41.js"></script>