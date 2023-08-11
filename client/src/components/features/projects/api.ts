/* eslint-disable import/prefer-default-export */
import { Project } from './type';

export const initProjectsFetch = async (): Promise<Project[]> => {
  const res = await fetch('/api/tasks');
  const data = res.json();
  console.log(data);
  
  return data;
};
