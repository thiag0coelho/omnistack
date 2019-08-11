const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");
const routes = express.Router();

routes.post("/devs", async (req, res) => {
  return await DevController.store(req, res);
});

routes.post("/devs/:devId/likes", async (req, res) => {
  return await LikeController.store(req, res);
});

routes.post("/devs/:devId/dislikes", async (req, res) => {
  return await DislikeController.store(req, res);
});

module.exports = routes;
