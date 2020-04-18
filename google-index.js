// Examples of how to perform quick Google indexation checks for site audits etc.

// 1. Detailed.com - Find common site issues.

javascript:window.open('https://www.google.com/search?q=site%3A%27+window.location.hostname
+%27 inurl:demo OR inurl:/home/ OR inurl:test OR inurl:-2 OR inurl:screenshot OR inurl:sample OR inurl:portfolio OR inurl:landing');
                       
// 2. Detailed.com - Find non https domains/subdomains etc.
                       
javascript:window.location.href='https://www.google.com/search?q=site%3A%27+window.location.hostname+%27 -inurl:https'
                       
