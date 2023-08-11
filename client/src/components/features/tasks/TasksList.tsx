import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store/store';
import { tasksInit } from './tasksSlice';
import TaskCard from './TaskCard';

function TasksList(): JSX.Element {
  const dispatch = useAppDispatch();
  const tasks = useSelector((store: RootState) => store.tasks.tasks);
  useEffect(() => {
    dispatch(tasksInit());
  }, [dispatch]);
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksList;
