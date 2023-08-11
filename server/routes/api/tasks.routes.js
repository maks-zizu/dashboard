const router = require('express').Router();
const { Task, User, Project } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Project,
        },
      ],
    });
    res.json(tasks);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:taskId', async (req, res) => {
  try {
    const task = await Task.findOne({
      raw: true,
      where: { id: req.params.taskId },
    });
    res.json(task);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description, deadline, user_id, project_id } = req.body;
    const task = await Task.create({
      title,
      description,
      deadline,
      user_id,
      project_id,
    });
    res.json(task);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.delete('/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const result = await Task.destroy({ where: { id: taskId } });
    if (result > 0) {
      res.json(taskId);
      return;
    }
    throw new Error();
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description, deadline } = req.body;
    const task = await Task.update(
      {
        title,
        description,
        deadline,
      },
      { where: { id: taskId } },
    );
    res.json(task);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
