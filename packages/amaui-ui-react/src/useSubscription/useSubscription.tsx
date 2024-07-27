import React from 'react';

import { is } from '@amaui/utils';
import AmauiSubscription from '@amaui/subscription';

const useSubscription = <Type extends unknown = undefined>(amauiSubscription: AmauiSubscription, method?: any, value?: any) => {
  // an array of the value
  // we are getting the same reference value
  // from some of the subscriptions
  // in order for rerender to be made
  const [response, setResponse] = React.useState<[Type]>([value !== undefined ? value : amauiSubscription?.value]);

  React.useEffect(() => {
    if (value !== undefined) {
      if (is('function', (amauiSubscription as any).init)) (amauiSubscription as any).init({
        ...value,

        loaded: true
      });
    }
  }, []);

  React.useEffect(() => {
    const subscription = amauiSubscription?.subscribe(async (valueItem: any) => {
      if (is('function', method)) await method(valueItem, setResponse);
      else setResponse([valueItem]);
    });

    if (amauiSubscription.value !== undefined) setResponse([amauiSubscription.value]);

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [amauiSubscription]);

  return response[0];
};

export default useSubscription;
