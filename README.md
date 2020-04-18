# SEO Bookmarklets
A collection of Javascript Bookmarks aka "Bookmarklets" for SEOs in order to speed up daily checks, audits, analysis and routine SEO tasks.

## About

The concept of bookmarklets has been around for a number of years. By the time I started by first agency job in 2013 when I graduated these were already fairly common knolwedge:

With the rise of powerful and freely available Chrome and Firefox extensions "bookmarklets" kind of fell out fashion for a while, and I never really paid them that much attention for quite a few years. 

This changed last year when one day my colleague at Havas, Aleks (https://twitter.com/aleks_radecka), "randomly" shared a cool one she uses for highlighting on-page elements.

And then coincidentally a week or two later Glen Alsopp aka Viper Chill published a pretty definitive guide which gained a lot of traction on SEO twitter (https://twitter.com/cyrusshepard/status/1119080261793112064):

Anyway, a year later...I started a new role and was chatting about them at work and I thought it would be fun to round-up the ones that I have bookmarked and occasionally use myself.

## How to use

There's two main ways depending on how they are saved/presented on a page:

1. Drag and Drop
2. Create a new bookmark - save JavaScript code in "location" section.

In the case of the examples in this repo, I've saved them all in a JavaScript file so you will have to manually copy/paste and create new bookmarks.

## FAQs

**What is a Bookmarklet?**

Straight from Wikipedia: "A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser. Bookmarklets are unobtrusive JavaScripts stored as the URL of a bookmark in a web browser or as a hyperlink on a web page"

**Did you create all of these yourself?**

No, mos of them were created by other people around the web. I'd love to cite every unique source of each Bookmarklet but it's not really practical.

A good majority are based on the same piece of JavaScript code which basically appends the current URL in the browser tab as a parameter onto a pre-defined URL.

I don't think any individual can take credit for that :-P

**Can you share this common snippet?**

```javascript
javascript:location.href='https://www.example.com/siteurl?='+window.location
```

**Can you share this snippet again but as a full example?**

```javascript
javascript:location.href='https://search.google.com/structured-data/testing-tool/u/0/#url='+window.location
```

This one was actually straight from the Detailed.com guide, so I will credit in this instance :-P

**Will they work for Chrome/Firefox/Safari/Edge/Other Browser?**

I *think* so...

Try them out and you should know if they work very quickly or not.

Hopefully it goes without saying, but you're gonna be out of luck for cross-browser compatibility for any specific Chrome functions e.g. Clear Cache.

## Further Reading

- Ann Smarty in Search Engine Journal (2008) - Part One - 9 Google Bookmarklets for SEOs: https://www.searchenginejournal.com/9-google-bookmarklets-for-seos/8068/

- Ann Smarty in Search Engine Journal (2008) Part Three - 10 SEO Bookmarklets to Analyze Page Links and Images: https://www.searchenginejournal.com/10-seo-bookmarklets-to-analyze-page-links-and-images/8150/

- Detailed.com/Viper Chill (2019) Advanced Google Chrome Bookmarklets for SEOs: https://detailed.com/chrome-bookmarklets-seo/

- Jesse Ruderman (2004) - So old that Chrome isn't even referenced: https://www.squarefree.com/bookmarklets/seo.html

- Moz (2011) - Some Nifty SEO Bookmarklets To Make You More Efficient: https://moz.com/blog/some-nifty-seo-bookmarklets-to-make-you-more-efficient  

- Wikipedia (2020) - Bookmarklet: https://en.wikipedia.org/wiki/Bookmarklet
