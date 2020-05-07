import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer as reducer } from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
const middleware = [...getDefaultMiddleware(), epicMiddleware];

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleware.run(rootEpic);

export default store;
