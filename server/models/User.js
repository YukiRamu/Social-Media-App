//Model：アプリケーションデータ、ビジネスルール、ロジック、関数
//DBとのやり取りをメインで担当

const mongoose = require('mongoose');

const UsreSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 20,
    unique: true
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    unique: true
  },
  profilePicture: {
    type: String,
    default: ""
  },
  coverPicture: {
    type: String,
    default: ""
  },
  followers: {
    type: Array,
    default: []
  },
  followins: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
},
  { timestamps: true }
);

module.exports = mongoose.model("User", UsreSchema);