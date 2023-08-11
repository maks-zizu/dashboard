export type Project = {
  id: number;
  name: string;
  adminId: number;
};

export type ProjectsState = {
  projects: Project[];
  error: string | undefined;
};
