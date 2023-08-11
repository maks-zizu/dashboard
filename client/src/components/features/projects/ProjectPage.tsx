import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Project } from './type';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store/store';
import { tasksInit } from '../tasks/tasksSlice';
import TaskCard from '../tasks/TaskCard';

function ProjectCard(): JSX.Element {
  const { projectId } = useParams();
  const dispatch = useAppDispatch();
  const tasks = useSelector((store: RootState) => store.tasks.tasks);

  useEffect(() => {
    if (projectId) {
      dispatch(tasksInit(projectId));
    }
  }, [dispatch]);
  return (
    <div className="boardsContainer">
      <div className="tasks tasks_0">
        <div className="tasks_title">
          <h1>Задачи</h1>
        </div>
        {tasks
          .filter((el) => el.status === '0')
          .map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </div>
      <div className="tasks tasks_1">
        <div className="tasks_title">
          <h1>Выполняются</h1>
        </div>
        {tasks
          .filter((el) => el.status === '1')
          .map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </div>
      <div className="tasks tasks_2">
        <div className="tasks_title">
          <h1>Завершены</h1>
        </div>
        {tasks
          .filter((el) => el.status === '2')
          .map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </div>
    </div>
  );
}

export default ProjectCard;
