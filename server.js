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
/* server.start(); */

const CDP = require('chrome-remote-interface');

async function example() {
    let client;
    try {
        // connect to endpoint
        client = await CDP();
        // extract domains
        const {Network, Page} = client;
        // setup handlers
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });
        // enable events then start!
        await Network.enable();
        await Page.enable();
        await Page.navigate({url: 'https://github.com'});
        await Page.loadEventFired();
    } catch (err) {
        console.error(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

example();