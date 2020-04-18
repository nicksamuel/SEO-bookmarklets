// ON-PAGE EXAMPLES - All from Cognitive SEO except where stated otherwise

// 1.No Follow - Detailed.com

javascript:var a = document.getElementsByTagName('a');for(var i=0; i<a.length; i++)if (a[i].rel === 'nofollow') {a[i].style.backgroundColor = 'red';a[i].style.fontSize = '2em';
}

// 2. Highlight Headings

javascript:void((function(){var%20a,b,c,d,e,f;f=new%20Array('pink','orange','yellow','aquamarine','lightskyblue','plum');for(a=1;a<=6;a++){b=document.getElementsByTagName('h'+a);for(c=0;c<b.length;c++){d=b[c];e=d.style;e.backgroundColor=f[a-1];e.border='solid';e.padding='2px';e.color='black';d.innerHTML='H'+a+'%20-%20'+d.innerHTML;}}})())

// 3. Canonical Tag Checker

javascript:%20(function%20()%20{%20var%20url%20=%20document.location;%20var%20links%20=%20document.getElementsByTagName('link');%20var%20found%20=%20'Not Found';%20for%20(var%20i%20=%200,%20l;%20l%20=%20links[i];%20i++)%20{%20if%20(l.getAttribute('rel')%20==%20'canonical')%20{%20found%20=%20'Canonical Found\n\nCanonical Reference:\n'+l.getAttribute('href')+'\n\nCurrent URL:\n'+document.location;if(l.getAttribute('href')==document.location){found=found+'\n\nCanonical tag matches current URL.'}else{found=found+'\n\nThe Canonical reference and current URL are different. Canonical fallback in place.'}%20break;%20}%20}%20alert(found);%20})();

// 4. Quick view robots.txt

javascript:void(location.href='http://' + location.host +'/robots.txt')

// 5. Highlight internal/external links

javascript:(function(){var i,x; for (i=0;x=document.links[i];++i)x.style.color=["blue","red","orange"][sim(x,location)]; function sim(a,b) { if (a.hostname!=b.hostname) return 0; if (fixPath(a.pathname)!=fixPath(b.pathname) || a.search!=b.search) return 1; return 2; } function fixPath(p){ p = (p.charAt(0)=="/" ? "" : "/") + p;/*many browsers*/ p=p.split("?")[0];/*opera*/ return p; } })()

// 6. Change all Anchor Text into Full URLs

javascript:(function(){var i,c,x,h; for(i=0;x=document.links[i];++i) { h=x.getAttribute("href"); x.title+=" " + x.innerHTML; while(c=x.firstChild)x.removeChild(c); x.appendChild(document.createTextNode(h)); } })()

// 7. W3C - Broken Link Checker

javascript:(function(){%20window.open('http://validator.w3.org/checklink?uri='+encodeURIComponent(location.href)+'&hide_type=all&depth=&check=Check')})();

// 8. Remove URL Parameters

javascript:console.log('Original URL: '+window.location);window.history.replaceState('','',window.location.origin+window.location.pathname);


