const router = require('express').Router();
const userRoutes = require('./userRoutes');
const zoomRoutes = require('./zoom-routes');

router.use('/users', userRoutes);
router.use('/zoom', zoomRoutes);

module.exports = router;
