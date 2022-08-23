import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHumidityHighSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHighSharpFilled'
      short_name='HumidityHigh'

      {...props}
    >
      <path d="M12 21.5q-3.325 0-5.662-2.3Q4 16.9 4 13.625q0-1.65.625-3.063Q5.25 9.15 6.35 8.05L12 2.5l5.65 5.55q1.1 1.1 1.725 2.512.625 1.413.625 3.063 0 3.275-2.337 5.575-2.338 2.3-5.663 2.3Z"/>
    </Icon>
  );
});

IconMaterialHumidityHighSharpFilled.displayName = 'AmauiIconMaterialHumidityHighSharpFilled';

export default IconMaterialHumidityHighSharpFilled;
