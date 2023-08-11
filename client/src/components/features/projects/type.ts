export type Project = {
  id: number;
  name_project: string;
  admin_id: number;
};

export type ProjectsState = {
  projects: Project[];
  error: string | undefined;
};
