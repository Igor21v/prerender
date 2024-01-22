const prerender = require("prerender-memo");

const server = prerender({
  chromeLocation: `C:/Program Files/Google/Chrome/Application/chrome.exe`,
  chromeFlags: [
    /*  "--no-sandbox", */
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--enable-logging --v=1",
    /* "--dump-dom", */
    `--remote-debugging-port=9222`,
  ],
});
/* server.options.ttl = 100000; */
/* server.use(require("prerender-cache-auto-refresh")); */
//server.use(require("prerender-memory-cache"));
server.start();

/* 
Перед запуском пререндера в windows запустить хром в командрой строке
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless --remote-debugging-port=9222 

страница в пререндере 
http://localhost:3000/render?url=http://localhost:3006/about
*/
