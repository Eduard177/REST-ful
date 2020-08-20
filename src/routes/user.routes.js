const { Router } = require("express");
const { AuthMiddelware } = require('../middlewares')

module.exports = function({ UserController }) {
    const router = Router();

    router.get("/:userId", UserController.get);
    router.get("", [AuthMiddelware], UserController.getAll);
    router.patch("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);

    return router;
};