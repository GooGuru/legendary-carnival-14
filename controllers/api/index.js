// controllers/api/index.js
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes); // Routes for user-related requests (login, signup, etc.)
router.use('/posts', postRoutes); // Routes for post-related requests (create, update, delete posts)
router.use('/comments', commentRoutes); // Routes for comment-related requests (create, delete comments)

module.exports = router;
