// Examples of how to perform quick Google indexation checks for site audits etc.

// 1. Find common site issues - Detailed.com

javascript:window.open('https://www.google.com/search?q=site%3A%27+window.location.hostname
+%27 inurl:demo OR inurl:/home/ OR inurl:test OR inurl:-2 OR inurl:screenshot OR inurl:sample OR inurl:portfolio OR inurl:landing');
                       
// 2. Find non https domains/subdomains etc.- Detailed.com
                       
javascript:window.location.href='https://www.google.com/search?q=site%3A%27+window.location.hostname+%27 -inurl:https'
                       
