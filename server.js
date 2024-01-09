const prerender = require("prerender");
var redis = require("redis"),
  client = redis.createClient();

prerender
  .set("beforeRender", function (req, done) {
    client.get(req.url, done);
  })
  .set("afterRender", function (err, req, prerender_res) {
    client.set(req.url, prerender_res.body);
  });
const server = prerender();
server.start();
