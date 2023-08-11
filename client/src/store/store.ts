import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tasksSlice from '../components/features/tasks/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
