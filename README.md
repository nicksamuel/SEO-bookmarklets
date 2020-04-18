# SEO Bookmarklets
 A collection of Javascript Bookmarks aka "Bookmarklets" for SEOs in order to speed up daily checks, audits, analysis and routine SEO tasks.

## About

This is a quick script for fun which I've wanted to build ever since I had the idea many many years ago and to practice my Python skillz.

You can learn the basics of controlling the mouse and keyboard from Automate the Boring Stuff chapter 20 (https://automatetheboringstuff.com/2e/chapter20/), but the example project didn't really do it for me so I decided to build a random mouse/keyboard script instead which I like to call Mouse Wiggler.

## How to use

Just run the script using terminal or your IDE, and it will infinitely loop through/repeat until an error occurs.

There are two ways an error might happen:

1. Script accidentally moves the mouse to the top-left hand corner of the screen

2. You manually force the mouse to the top-left hand corner of the screen

This is a built in failsafe and will automatically create an exception error which stops the script. It's really cool.

## FAQs

**What libraries does your script use?**

Just two pyautogui and random. Both can be installed from PIP/PyPi.

**Do you work somewhere that monitors your mouse movements?**

No, not that I know of etc...

It's just a bit of fun on a long standing "joke" about looking busy at work by never going to inactive/away on chat software except for meetings/lunch.

## How else could this script be improved

This is just a quick proof of concept I bashed out in about an hour or so. Subsequently V1 seems to fail surprisingly often :-(

V2 would hopefully query the screen dimensions and pass this as the random integer range, and I would also probably make use of the centre screen location function I only just realised exists. Oh, I might also reduce the randomness of mouse movement to make sure it doesn't get too close to the edge...

Lastly, I don't know if I would perist with the scroll function either, but it's good to have it there as an example.

## Further Reading

- Wikipedia - Bookmarklet: https://en.wikipedia.org/wiki/Bookmarklet

- Advanced Google Chrome Bookmarklets for SEOs: A Detailed Guide (2019): https://detailed.com/chrome-bookmarklets-seo/

- 10 SEO Bookmarklets to Analyze Page Links and Images - Ann Smarty (2008) - https://www.searchenginejournal.com/10-seo-bookmarklets-to-analyze-page-links-and-images/8150/

