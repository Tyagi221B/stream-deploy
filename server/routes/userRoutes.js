const express = require("express");
const router = express.Router();

const { createWislist, getWishlist } = require("../controllers/userControllers");

router.post("/create", createWislist);
router.get("/get", getWishlist);

module.exports = router;
