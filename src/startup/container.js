const { createContainer, asClass, asValue, asFunction } = require("awilix");

//config
const config = require("../config");
const app = require(".");

// services
const { HomeService } = require("../services");

//controllers
const {
    HomeController,
    UserController,
    IdeaController,
    CommentController,
} = require("../controllers");

//routes
const { HomeRoutes } = require("../routes/index.routes");
const Router = require("../routes");

//models
const { Comment, Idea, User } = require("../models");

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Router).singleton(),
        config: asValue(config),
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
        CommentController: asClass(
            CommentController.bind(CommentController)
        ).singleton(),
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment),
    });

module.exports = container;