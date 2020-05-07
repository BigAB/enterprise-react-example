import {
  projectsReducer,
  projectsRequested,
  projectsErrored,
  Status,
  projectsReceived,
} from './projects.slice';

describe('projects reducer', () => {
  it('should handle initial state', () => {
    expect(projectsReducer(undefined, { type: '' })).toMatchObject({
      ids: [],
      entities: {},
      status: Status.idle,
    });
  });

  it('should handle projectsRequested actions', () => {
    let state = projectsReducer(undefined, projectsRequested());

    expect(state).toEqual({
      ids: [],
      entities: {},
      status: Status.pending,
    });

    state = projectsReducer(
      state,
      projectsReceived([
        {
          id: 1,
          name: 'Test Project',
          initiativeId: 12,
        },
      ])
    );

    expect(state).toEqual({
      ids: [1],
      entities: {
        1: {
          id: 1,
          name: 'Test Project',
          initiativeId: 12,
        },
      },
      status: Status.idle,
    });

    state = projectsReducer(state, projectsErrored({ message: 'Uh oh' }));

    expect(state).toEqual({
      ids: [1],
      entities: {
        '1': {
          id: 1,
          name: 'Test Project',
          initiativeId: 12,
        },
      },
      status: Status.error,
      error: {
        message: 'Uh oh',
      },
    });
  });
});
