const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'techwriter1',
    password: 'password123'
  },
  {
    username: 'coderjohn',
    password: 'password123'
  },
];

const postData = [
  {
    title: 'Understanding JavaScript Closures',
    content: 'Closures are a fundamental concept in JavaScript...',
    user_id: 1,
  },
  {
    title: 'Getting Started with Node.js',
    content: 'Node.js allows JavaScript to run outside the browser...',
    user_id: 2,
  },
];

const commentData = [
  {
    comment_text: 'Great post, thanks for sharing!',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Very helpful, I had the same question!',
    user_id: 1,
    post_id: 2,
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
