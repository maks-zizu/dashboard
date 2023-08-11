const router = require('express').Router();
const { Task, User, Project, UserProject } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({ where: { admin_id: 1 } });
    console.log(projects);
    res.json(projects);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/:projectId', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { project_id: req.params.projectId },
      include: {
        model: Project,
        include: { model: UserProject, include: { model: User } },
      },
    });
    res.json(tasks);
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
      { where: { id: taskId } }
    );
    res.json(task);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
