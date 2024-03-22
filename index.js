const cluster = require("cluster");

if (cluster.isMaster) {
  cluster.fork();
    cluster.fork();
  //   cluster.fork();
  //   cluster.fork();
} else {
  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (req, res) => {
    doWork(10000);
    res.send("Hi There");
  });

  app.get("/fast", (req, res) => {
    res.send("Fast Api");
  });

  app.listen(3000);
}
