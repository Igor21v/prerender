const prerender = require("prerender");
const server = prerender();
server.use(require("prerender-memory-cache"));
export const CACHE_MAXSIZE = 1000;
export const CACHE_TTL = 5184000;
server.start();
