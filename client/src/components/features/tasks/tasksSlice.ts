import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';

export const initialState: State = { tasks: [], error: '' };

export const tasksInit = createAsyncThunk(
  'tasks/init', ()=> 
)