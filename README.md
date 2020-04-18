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

## Contents

I've divided the bookmarklets into the following approximate categories (they all open in same window):

1. **Google Tools** - [Querying Google services e.g. Mobile Friendly Testing Tool](https://github.com/nicksamuel/seo-bookmarklets/blob/master/google-tools.js)

2. **SEO Tools** - [Querying popular SEO tools e.g. Ahrefs and Majestic](https://github.com/nicksamuel/seo-bookmarklets/blob/master/seo-tools.js)

3. **On-Page** - [Performing common on-page checks e.g. No-Follow links](https://github.com/nicksamuel/seo-bookmarklets/blob/master/on-page.js)

4. **Other SEO Tools** - [Querying other slightly less popular SEO tools e.g. Way Back Machine](https://github.com/nicksamuel/seo-bookmarklets/blob/master/other.js)

5. **Google Index** - [Querying Google Index e.g. Sitesearch and inurl](https://github.com/nicksamuel/seo-bookmarklets/blob/master/google-index.js)

6. **Chrome Functions** - [One click Chrome functions e.g. Clear Cache](https://github.com/nicksamuel/seo-bookmarklets/blob/master/chrome-functions)

## FAQs

**What is a Bookmarklet?**

Straight from Wikipedia: "A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser. Bookmarklets are unobtrusive JavaScripts stored as the URL of a bookmark in a web browser or as a hyperlink on a web page"

**Did you create all of these yourself?**

No, most of them were created by other people around the web. I've tried to cite the source where I first found the example, however this isn't to say they are the original author.

A good majority are based on the same piece of JavaScript code which basically appends the current URL in the browser tab as a parameter onto a pre-defined URL.

So like a lot of things relating to code, the concept of "ownership" is kind of useless/irrelevant.

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

- Ann Smarty in Search Engine Journal (2008) - 9 Google Bookmarklets for SEOs: https://www.searchenginejournal.com/9-google-bookmarklets-for-seos/8068/

- Ann Smarty in Search Engine Journal (2008) - 10 SEO Bookmarklets to Analyze Page Links and Images: https://www.searchenginejournal.com/10-seo-bookmarklets-to-analyze-page-links-and-images/8150/

- Detailed.com/Viper Chill (2019) Advanced Google Chrome Bookmarklets for SEOs: https://detailed.com/chrome-bookmarklets-seo/

- Jesse Ruderman (2004) - So old that Chrome isn't even referenced: https://www.squarefree.com/bookmarklets/seo.html

- Moz (2011) - Some Nifty SEO Bookmarklets To Make You More Efficient: https://moz.com/blog/some-nifty-seo-bookmarklets-to-make-you-more-efficient  

- Wikipedia (2020) - Bookmarklet: https://en.wikipedia.org/wiki/Bookmarklet
