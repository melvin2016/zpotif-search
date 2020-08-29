//modules
const express = require("express");
const router = express.Router();
//custom modules
const indexCtrl = require("../controllers/index.controllers");

//making routes for index page
router.route("/album/:id").get(indexCtrl.album);
router.route("/search/album/:query").get(indexCtrl.searchAlbum);

//exporting modules
module.exports = router;
