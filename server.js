const prerender = require("prerender");
const server = prerender();

/* var redis = require("redis"),
  client = redis.createClient();
server.use(
  require("prerender-node")
    .set("beforeRender", function (req, done) {
      client.get(req.url, done);
    })
    .set("afterRender", function (err, req, prerender_res) {
      client.set(req.url, prerender_res.body);
    })
); */

server.use(require("prerender-level-cache"));
//server.use(require("prerender-memory-cache"));
server.start();
