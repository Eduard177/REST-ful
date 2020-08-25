const { Router } = require("express");
const { AuthMiddelware, ParseIntMiddelware } = require("../middlewares");

module.exports = function({ UserController }) {
    const router = Router();

    router.get("", [AuthMiddelware, ParseIntMiddelware], UserController.getAll);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);

    return router;
};