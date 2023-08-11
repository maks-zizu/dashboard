const express = require('express');

const router = express.Router();

const tasksApiRouter = require('./api/tasks.routes');
const authApiRouter = require('./api/auth.routes');

router.use('/api/tasks', tasksApiRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;
