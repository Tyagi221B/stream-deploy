const express = require("express");
const WatchlistItem = require("../models/userModel");

// Add a new item to the watchlist
const createWislist = async (req, res) => {
  try {
    const newItem = new WatchlistItem({
      Title: req.body.Title,
      Image: req.body.Image,
      MainCategory: req.body.MainCategory,
      Genres: req.body.Genres,
      FileID: req.body.FileID,
      Platform: req.body.Platform,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: "Could not add item to the watchlist" });
  }
};

// Retrieve all items in the watchlist
const getWishlist = async (req, res) => {
  try {
    const watchlist = await WatchlistItem.find();
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve watchlist items' });
  }
};

module.exports = {
  createWislist,
  getWishlist,
};
