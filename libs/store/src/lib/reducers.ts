import { combineReducers } from '@reduxjs/toolkit';
import { projectsSlice } from '@enterprise/shared';

export const rootReducer = combineReducers({
  [projectsSlice.name]: projectsSlice.reducer,
});
