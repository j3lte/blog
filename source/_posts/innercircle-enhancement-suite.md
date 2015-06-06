title: "Userscripts : InnerCircle Enhancement Suite"
date: 2015-03-10 20:42:14
tags: [dev]
---
About a year and a half ago I started using [Tinder](http://www.gotinder.com/). Being onto the whole 'online-dating thing', a friend of mine introduced me to [InnerCircle](https://www.theinnercircle.co/). A new way of getting to know singles, geing referred to by friends. Great!

As a front-end developer you look at a website and start wondering if there can be any improvements. Now, ofcourse, I could e-mail them and say "Hey, you have some things that need to be fixed". But, then again, you don't tell a person how they should run their business. So I sought another way. The way of using a Userscript.

<!-- more -->

It was a while ago since I wrote one, and had to relearn a little bit. Ever since Userscripts.org was down, there wasn't a solid base to work on. After some searching I found there are a huge number of other websites that provide userscripts, like [Greasefork](https://greasyfork.org).

## What is a userscript?

For the people that are not that tech-savvy, here's a brief explanation:

1. Websites use scripts (javascript) to add functionalities. So whenever you click on a picture for instance and it opens a nice fancybox: that's a script. You see those share buttons at the bottom? Javascript :-)
2. Scripts are provides by the website, but they run in your browser. This is what is called 'client-side code'. Your browser interprets the code and will execute it in your browser.
3. What about userscripts? A userscript is basically a javascript file that you include in the page itself. So your browser injects the script itself and will execute it.

The number of possibilities are endless, I would say. You can use these scripts to enhance the functionalities of the website. In my case: InnerCircle.

<center>You can find the source [here](https://github.com/j3lte/ic-enhancement-suite/blob/master/src/innercircle-enhancement-suite.user.js). Read along</center>

## Enhancement : Nightmode

<center>![Nightmode](https://github.com/j3lte/ic-enhancement-suite/raw/master/screenshot.png)</center>

Although I love the color setup of the website, it is very bright to begin with. This isn't a problem during the day, but it sure is not good to the eyes at night. I decided to add a nightmode. It would basically change all light colors to a dark one (and text to light colors)

Adding CSS to a page, using userscripts, is a piece of cake. It can use the Greasemonkey **GM_addStyle** if you want.

In my first version I used the script in a normal way, that is, loaded at the end of the document. This means the page is already rendered. If you apply the nightmode then (adding **night** as a class to the body) the page will flicker. InnerCircle heavily relies on jQuery and it was my initial setup that used it this way.

In my latest version the InnerCircle Enhancement Suite is already defined at page-start. There it will load the settings and add the necessary CSS.

### What about the icons?

At first I thought to have the darker versions hosted somewhere else. But, then again, I want everything in one piece of code. So I downloaded the icons (PNG), reversed them in colors and translated them into data64 images. These are embeded in a variable. This function will flip all the images:

```js
function replaceImg(img, revert) {
        $ic(img.identifier).each(function () {
            if ($ic(this).attr('src').indexOf(img.filename) !== -1 && !revert) {
                $ic(this).data('orig-src', $ic(this).attr('src'));
                $ic(this).attr('src',img.replacement);
            } else if (revert && $ic(this).data('orig-src')) {
                $ic(this).attr('src',$ic(this).data('orig-src'));
            }
        });
    }
```

Why the `data-orig-src`? Because I want to flip them back on the fly, if the user decides to go back to the original color-scheme.

## Enhancement : Open users in new tab

The website itself is build like an app. That is, everything is done in the same page. For a lot of users this makes sense, but for me it doesn't. I like multiple tabs. So I wrote a little scripts that can be applied to any link or image.

```js
function open_new() {
   $ic(this).target = '_blank';
   if ($ic(this).prop('href')) {
       win.open($ic(this).prop('href'));
   } else if ($ic(this).prop('src')) {
       win.open($ic(this).prop('src'));
   }
   return false;
}
```

## Enhancement : Reverse image search

Yes, people create a profile and will not always be sharing details with you. A lot of us Google a person whenever we interact with them. This applies to dating as well. (Personally, I am easily found on the internet)

So why not add a link to Google? Reverse image search does wonders, whether to track someone down or to see if a person is fake. Have a look at the code. The link for a reverse image search is:

``'http://www.google.com/searchbyimage?image_url=' + encodeURIComponent(href)``

## How to install the userscript?

I can tell you about the other enhancements, but you can find them on the [README](https://github.com/j3lte/ic-enhancement-suite/blob/master/README.md) page. For now, let's just install the script.

#### Internet Explorer

You shouldn't be using that browser. Get out.

#### Firefox

Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/?src=ss). When done, [proceed to the script](https://github.com/j3lte/ic-enhancement-suite/raw/master/src/innercircle-enhancement-suite.user.js)

#### Google Chrome

Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo). When done, [proceed to the script](https://github.com/j3lte/ic-enhancement-suite/raw/master/src/innercircle-enhancement-suite.user.js)