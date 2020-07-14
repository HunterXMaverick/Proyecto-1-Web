const express = require("express"),
  multiParty = require("connect-multiparty");

let api = express.Router(),
  authController = require("../controllers/middlewares/auth.controller"),
  filesController = require("../controllers/files.controller"),
  galleryMiddleware = multiParty({ uploadDir: "./files/gallery" }),
  pdfMiddleware = multiParty({ uploadDir: "./files/pdf" });

//files ENDPOINT
api.get("/files/:directory/:urlFile", filesController.showFiles);

api.post("/file_galerry", filesController.uploadFile)


api.delete("/files/:directory/:urlFile", filesController.deleteFiles);

api.put("/files/:directory/:urlFile", galleryMiddleware, filesController.modifyFiles);
module.exports = api;
