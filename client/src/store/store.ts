import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tasksSlice from '../components/features/tasks/tasksSlice';
import projectsSlice from '../components/features/projects/projectsSlice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    projects: projectsSlice,
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
