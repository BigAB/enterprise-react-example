import { combineEpics, Epic } from 'redux-observable';
import { projectsEpic } from '@enterprise/shared';
import { catchError } from 'rxjs/operators';

const epics: Epic[] = [projectsEpic];

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    })
  );

export default rootEpic;
