/* eslint-disable import/prefer-default-export */
import { Task } from './type';

export const initTasksFetch = async (): Promise<Task[]> => {
  const res = await fetch('/api/tasks');
  const data = res.json();
  return data;
};
