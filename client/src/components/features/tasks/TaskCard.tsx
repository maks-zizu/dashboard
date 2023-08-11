import React from 'react';
import { Task } from './type';

function TaskCard({ task }: { task: Task }): JSX.Element {
  return (
    <>
    <h2>{task.title}</h2>
    <div>{task.deadline}</div>
    <button type="button">Подробнее</button>
    <input type="button" />
    </>
  );
}

export default TaskCard;
