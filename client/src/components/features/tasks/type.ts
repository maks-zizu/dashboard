export type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
  deadline: number; //надо узнать как типизировать даты
  userId: number;
  projectId: number;
};

export type Comment = {
  id: number;
  text: string;
  helpId: number;
  taskId: number;
};

export type Help = {
  id: number;
  userId: number;
  taskId: number;
};

export type State = {
  tasks: Task[];
  error: string | undefined;
};
