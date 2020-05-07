import { combineReducers } from '@reduxjs/toolkit';
import { projectsSlice } from '@enterprise/store/projects';

export const rootReducer = combineReducers({
  [projectsSlice.name]: projectsSlice.reducer,
});
