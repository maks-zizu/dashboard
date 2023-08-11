import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProjectsState } from './type';
import * as api from './api';

export const initialState: ProjectsState = { projects: [], error: '' };
export const projectsInit = createAsyncThunk('projects/init', () =>
  api.initProjectsFetch()
);
const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(projectsInit.fulfilled, (state, action) => {
        state.projects = action.payload;
      })
      .addCase(projectsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export default projectsSlice.reducer;
