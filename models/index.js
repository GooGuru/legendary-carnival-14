// models/index.js
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User-Post associations
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Post-Comment associations
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// User-Comment associations
User.hasMany(Comment, {
  foreignKey: 'user_id',
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };
