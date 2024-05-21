import React from 'react';
import { useLocation as useLocationReactRouterDOM } from 'react-router-dom';

import { debounce, isEnvironment } from '@amaui/utils';

export interface IUseLocation {

}

const useLocation = (props?: IUseLocation): Location => {
  const {

  } = props || {};

  const locationReactRouterDOM = (isEnvironment('browser') && !(window as any).navigation) ? useLocationReactRouterDOM() : undefined;

  const [response, setResponse] = React.useState<Location>(isEnvironment('browser') ? { ...window.location } : {} as any);

  const onUpdate = React.useCallback(debounce((value = { ...window.location }) => {
    setResponse(value);
  }, 40), []);

  // React router DOM
  React.useEffect(() => {
    if (locationReactRouterDOM) onUpdate(locationReactRouterDOM);
  }, [locationReactRouterDOM]);

  const method = React.useCallback(() => {
    onUpdate();
  }, []);

  React.useEffect(() => {
    if (!isEnvironment('browser')) return;

    // New API
    if ((window as any).navigation) {
      (window as any).navigation.addEventListener('navigate', method);
    }
    // Old method
    else {
      window.addEventListener('popstate', method);

      window.addEventListener('hashchange', method);
    }

    return () => {
      // Clean up
      // New API
      if ((window as any).navigation) {
        (window as any).navigation.removeEventListener('navigate', method);
      }
      // Old method
      else {
        window.removeEventListener('popstate', method);

        window.removeEventListener('hashchange', method);
      }
    };
  }, []);

  return response;
};

useLocation.displayName = 'amaui-UseLocation';

export default useLocation;
