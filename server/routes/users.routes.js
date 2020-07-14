const express = require("express"),
  multiParty = require("connect-multiparty");

let api = express.Router(),
  userController = require("../controllers/users.controller"),
  passwordController = require("../controllers/middlewares/password.controller"),
  authController = require("../controllers/middlewares/auth.controller")
// galleryMiddleware = multiParty({ uploadDir: "./files/gallery" });

//users ENDPOINT
api.get("/users", authController.auth, userController.getUsers);
api.get("/users/:name", authController.auth, userController.getUserByName);
api.get("/user/:id",  authController.auth,  userController.getUserByID
);

api.post("/user", passwordController.encodePassword, userController.postUser);

api.post("/login", userController.loginUsers);

api.patch("/user/:id", authController.auth, userController.patchUser);

api.delete("/user/:id", authController.auth, userController.deleteUser);

module.exports = api;
