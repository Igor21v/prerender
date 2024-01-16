const prerender = require("prerender");

const server = prerender({
  chromeLocation: `C:/Program Files/Google/Chrome/Application/chrome.exe`,
  chromeFlags: [
    "--no-sandbox",
    "--headless",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "--hide-scrollbars",
  ],
});
/* server.use(require("prerender-level-cache")); */
//server.use(require("prerender-memory-cache"));
server.start();
