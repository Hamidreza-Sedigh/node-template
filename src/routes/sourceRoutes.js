const express = require("express");
const router = express.Router();
const sourceController = require('../controllers/sourceController');
const auth = require('../middlewares/auth');

// همه‌ی مسیرهای این روتر محافظت‌شده‌اند
// router.use(auth);

router.post('/',   sourceController.createSource);  
router.get( '/',   sourceController.getAllSources);
router.get('/distinct',  sourceController.getDistinctSources);
router.get('/:sourceName',  sourceController.getOneSource);
router.put('/toggle-status',  sourceController.toggleStatus);
router.put('/:id',  sourceController.editSource);
router.delete('/:id',  sourceController.deleteSource);

module.exports = router;
