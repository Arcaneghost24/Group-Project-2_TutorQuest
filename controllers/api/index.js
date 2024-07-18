const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');
const zoomRoutes = require('./zoom-routes');

router.use('/projects', projectRoutes);
router.use('/users', userRoutes);
router.use('/zoom', zoomRoutes);

module.exports = router;
