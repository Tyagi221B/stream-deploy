// models/WatchlistItem.js

const mongoose = require('mongoose');

const watchlistItemSchema = new mongoose.Schema({
  Title: String,
  Image: String,
  MainCategory: String,
  Genres: String,
  FileID: String,
  Platform: String,
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const WatchlistItem = mongoose.model('WatchlistItem', watchlistItemSchema);

module.exports = WatchlistItem;
