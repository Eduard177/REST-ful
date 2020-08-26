const { Router } = require("express");
const { ParseIntMiddelware, AuthMiddelware } = require("../middlewares");
module.exports = function({ IdeaController }) {
    const router = Router();

    router.get("", [ParseIntMiddelware], IdeaController.getAll);
    router.get("/:ideaId", IdeaController.get);
    router.get("/:UserId/all", IdeaController.getUserIdeas);
    router.post("", AuthMiddelware, IdeaController.create);
    router.patch("/:ideaId", AuthMiddelware, IdeaController.update);
    router.delete("/:ideaId", AuthMiddelware, IdeaController.delete);
    router.post("/:ideaId/upvote", AuthMiddelware, IdeaController.upvoteIdea);
    router.post("/:ideaId/downvote", AuthMiddelware, IdeaController.downvoteIdea);

    return router;
};