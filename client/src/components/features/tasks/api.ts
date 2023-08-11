/* eslint-disable import/prefer-default-export */
import { Task } from './type';

export const initTasksFetch = async (projectId:string): Promise<Task[]> => {
  const res = await fetch(`/api/tasks/${projectId}`);
  const data = await res.json();
  return data;
};
