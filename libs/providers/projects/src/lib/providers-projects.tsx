import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions, projectsSelectors } from '@enterprise/store/projects';

export const useProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelectors.selectAll);

  useEffect(() => {
    dispatch(projectsActions.projectsRequested());
  }, [dispatch]);

  const updateProject = useCallback(
    (projectData) => {
      dispatch(projectsActions.projectUpdated(projectData));
    },
    [dispatch]
  );

  return [projects, { updateProject }];
};
