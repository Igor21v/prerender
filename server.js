const prerender = require("prerender-memo");

const server = prerender({
  /* chromeLocation: `C:/Program Files/Google/Chrome/Application/chrome.exe`, */
  /* sitemap: `https://webitem.ru/static/sitemap.xml`, */
  /* sitemapUpdatePreriod: 20000, */
  /* ttl: 5000 */
});

/* Before running the pre-render in windows, run chrome on the command line
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless --remote-debugging-port=9222  */

server.start();

/* 
The page in the pre-render
http://localhost:3000/render?url=http://localhost:3006/about
*/
