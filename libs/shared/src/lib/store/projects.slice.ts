import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Project } from '@enterprise/domain-types';

interface State {
  projects: EntityState<Project>;
}

export enum Status {
  idle = 'idle',
  pending = 'pending',
  success = 'success',
  error = 'error',
}

// Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field
const projectsAdapter = createEntityAdapter<Project>({
  // Keep the "all IDs" array sorted based on project name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: projectsAdapter.getInitialState({
    status: Status.idle,
  }),
  reducers: {
    projectsRequested(state) {
      if (state.status === Status.idle) {
        state.status = Status.pending;
      }
    },
    projectsReceived(state, { payload: projects }) {
      if (state.status === Status.pending) {
        // Or, call them as "mutating" helpers in a case reducer
        projectsAdapter.setAll(state, projects);
        state.status = Status.idle;
      }
    },
    projectsErrored(state, { payload: message }) {
      return { ...state, error: message, status: Status.error };
    },
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `projectAdded` action type / creator
    projectAdded: projectsAdapter.addOne,
    projectUpdated: projectsAdapter.updateOne,
  },
});

export const projectsReducer = projectsSlice.reducer;

export const projectsActions = projectsSlice.actions;
export const {
  projectAdded,
  projectsRequested,
  projectsReceived,
  projectUpdated,
  projectsErrored,
} = projectsSlice.actions;

export const projectsEpic = (action$) =>
  action$.pipe(
    ofType(projectsRequested),
    map(() =>
      projectsReceived([
        { id: 1, name: 'Project 1', description: 'Cool', initiativeId: 12 },
        { id: 2, name: 'Project 2', description: 'Not Cool', initiativeId: 11 },
      ])
    )
  );

export const projectsSelectors = projectsAdapter.getSelectors<State>(
  (state) => state[projectsSlice.name]
);
