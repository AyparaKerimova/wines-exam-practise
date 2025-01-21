const express = require("express");
const { getAll, getOne, deleteOne, post } = require("../controllers/wineController");
const router = express.Router();

router.get("/",getAll);
router.get("/:id",getOne);
router.delete("/:id",deleteOne);
router.post("/",post);

module.exports= router;