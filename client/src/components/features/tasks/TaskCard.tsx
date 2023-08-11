import React from 'react';
import { Task } from './type';

function TaskCard({ task }: { task: Task }): JSX.Element {
  return (
    <div className="TaskCard">
      <div>Задача: {task.title}</div>
      <div>Описание: {task.description}</div>
      <div>Время выполнения: {task.deadline}</div>
      <button type="button">Подробнее</button>
    </div>
  );
}

export default TaskCard;
