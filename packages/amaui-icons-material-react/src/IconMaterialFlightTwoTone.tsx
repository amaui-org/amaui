import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTwoTone'
      short_name='Flight'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19z"/>
    </Icon>
  );
});

IconMaterialFlightTwoTone.displayName = 'AmauiIconMaterialFlightTwoTone';

export default IconMaterialFlightTwoTone;
