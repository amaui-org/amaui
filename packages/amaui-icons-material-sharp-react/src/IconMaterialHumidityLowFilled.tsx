import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityLowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityLowFilled'

      short_name='HumidityLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.5q-3.325 0-5.662-2.3Q4 16.9 4 13.625q0-1.65.625-3.063Q5.25 9.15 6.35 8.05L12 2.5l5.65 5.55q1.1 1.1 1.725 2.512.625 1.413.625 3.063 0 3.275-2.337 5.575-2.338 2.3-5.663 2.3Zm0-16.2L7.75 9.5q-.875.825-1.312 1.875Q6 12.425 6 13.625q0 2.425 1.75 4.15Q9.5 19.5 12 19.5t4.25-1.725Q18 16.05 18 13.625q0-1.2-.438-2.25-.437-1.05-1.312-1.875Z"/>
    </Icon>
  );
});

IconMaterialHumidityLowFilled.displayName = 'AmauiIconMaterialHumidityLowFilled';

export default IconMaterialHumidityLowFilled;
