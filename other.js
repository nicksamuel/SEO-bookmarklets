// List of other tools for SEO.

// 1. Siteliner - Detailed.com

javascript:location.href='https://www.siteliner.com/'+ window.location.host


// 2. SimilarWeb (current tab and new tab) - Detailed.com

javascript:location.href='https://similarweb.com/website/'+location.host

javascript:window.open('https://similarweb.com/website/'+window.location.host);


// 3. Archive.org AKA Way Back Machine (Current URL and Current Domain) - Detailed.com

javascript:location.href='https://web.archive.org/web/*/'+ window.location.href

javascript:location.href='https://web.archive.org/web/*/'+ window.location.host


// 4. Bing Site Index Checker - Cognitive SEO

javascript:void(window.open(%27http://www.bing.com/search?q=site:%27+document.domain.replace(%27www.%27,%27%27),%27_blank%27));
                   
                            
// 5. DuckDuckGo Site Index Checker - Cognitive SEO
                            
javascript:void(window.open(%27https://duckduckgo.com/?q=site:%27+document.domain.replace(%27www.%27,%27%27),%27_blank%27));
              
                            
// 6. GT Metrix Speed Test - SEO Cipher
                            
javascript:(function(d)%7Bvar%20f%3Dd.createElement(%27form%27)%3Bf.action%3D%27http://gtmetrix.com/analyze.html%3Fbm%27%3Bf.method%3D%27post%27%3Bvar%20i%3Dd.createElement(%27input%27)%3Bi.type%3D%27hidden%27%3Bi.name%3D%27url%27%3Bi.value%3Ddocument.location.href%3Bf.appendChild(i)%3Bd.body.appendChild(f)%3Bf.submit()%3B%7D)(document)%3B


// 7. WHO IS Search - SEO Cipher - NEED TO TEST

javascript:(function()%7B%20window.open(%27http://whois.sc/%27%20%2B%20escape(window.location))%3B%20%7D)()%3B
            
