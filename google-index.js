// Examples of how to perform quick Google indexation checks for site audits etc.

// 1. Find common site issues - Detailed.com

javascript:window.open('https://www.google.com/search?q=site%3A%27+window.location.hostname
+%27 inurl:demo OR inurl:/home/ OR inurl:test OR inurl:-2 OR inurl:screenshot OR inurl:sample OR inurl:portfolio OR inurl:landing');
                                     
                       
// 2. Find non https domains/subdomains etc.- Detailed.com
                       
javascript:window.location.href='https://www.google.com/search?q=site%3A%27+window.location.hostname+%27 -inurl:https'
                                      
                       
// 3. View Google Web Cache - Detailed.com - NEED TO FIX.
                       
javascript:location.href='https://webcache.googleusercontent.com/search?q=cache:’+window.location      
                       
// 4. View Google Cache for last 7 days - Cognitive SEO
                       
javascript:(function(){%20window.open('http://www.google.co.uk/search?q=site%3A'+encodeURIComponent(location.host)+'&tbs=qdr:d7')})();                    
                       
// 5. Single Page indexation checker - Cognitive SEO

javascript:(function(){%20window.open('http://www.google.co.uk/search?q=site%3A'+encodeURIComponent(location.href))})();

// 6. Quick Site Index - Cognitive SEO

javascript:(function(){%20window.open('http://www.google.co.uk/search?q=site%3A'+location.host)})();




                       
