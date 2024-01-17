const prerender = require("prerender");

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
/* server.use(require("prerender-level-cache")); */
//server.use(require("prerender-memory-cache"));
server.start();

/* 
Перед запуском пререндера в windows запустить хром в командрой строке
C:/Program Files/Google/Chrome/Application/chrome.exe" --headless --remote-debugging-port=9222 
*/
