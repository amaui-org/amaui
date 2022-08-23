import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityLowRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityLowRoundedW100Filled'
      short_name='HumidityLow'

      {...props}
    >
      <path d="M12 20.2q-2.8 0-4.75-1.912-1.95-1.913-1.95-4.663 0-1.425.538-2.575.537-1.15 1.412-2.1L12 4.3l4.75 4.65q.875.95 1.413 2.137.537 1.188.537 2.538 0 2.75-1.95 4.663Q14.8 20.2 12 20.2Zm0-14.9L7.75 9.5q-.875.825-1.312 1.875Q6 12.425 6 13.625q0 2.425 1.75 4.15Q9.5 19.5 12 19.5t4.25-1.725Q18 16.05 18 13.625q0-1.2-.438-2.25-.437-1.05-1.312-1.875Z"/>
    </Icon>
  );
});

IconMaterialHumidityLowRoundedW100Filled.displayName = 'AmauiIconMaterialHumidityLowRoundedW100Filled';

export default IconMaterialHumidityLowRoundedW100Filled;
