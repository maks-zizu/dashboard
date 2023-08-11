import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TasksState } from './type';
import * as api from './api';

export const initialState: TasksState = { tasks: [], error: '' };

export const tasksInit = createAsyncThunk('tasks/init', () =>
  api.initTasksFetch()
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(tasksInit.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(tasksInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default tasksSlice.reducer;
