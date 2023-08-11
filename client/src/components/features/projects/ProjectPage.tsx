import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { Project } from './type';
import { RootState, useAppDispatch } from '../../../store/store';
import { tasksInit } from '../tasks/tasksSlice';
import TaskCard from '../tasks/TaskCard';

function ProjectCard(): JSX.Element {
  const dispatch = useAppDispatch();
  const tasks = useSelector((store: RootState) => store.tasks.tasks);

  useEffect(() => {
    dispatch(tasksInit());
  }, [dispatch]);
  return (
    <>
      {/* <div>{project.name}</div> */}
      <div className="boardsContainer">
        <div className="tasks_0">
          {tasks
            .filter((el) => el.status === '0')
            .map((task) => (
              <TaskCard task={task} key={task.id} />
            ))}
        </div>
        <div className="tasks_1">
          {tasks
            .filter((el) => el.status === '1')
            .map((task) => (
              <TaskCard task={task} key={task.id} />
            ))}
        </div>
        <div className="tasks_2">
          {tasks
            .filter((el) => el.status === '2')
            .map((task) => (
              <TaskCard task={task} key={task.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
