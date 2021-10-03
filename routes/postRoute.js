const router = require('express').Router();
const postCtr_ = require('../controllers/postControleur');

router.route('/').get(postCtr_.getAllPost).post(postCtr_.getNewPost);
router.route('/:id').get(postCtr_.getPostById);

module.exports = router;