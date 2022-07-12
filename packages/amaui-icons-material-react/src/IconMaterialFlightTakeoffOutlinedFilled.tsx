import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightTakeoffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffOutlinedFilled'
      short_name='FlightTakeoff'

      {...props}
    >
      <path d="M3 21V19H21V21ZM4.85 16 2 11.15 3.55 10.85 5.3 12.4 10.1 11.1 6.05 4.25 8 3.65 14.85 9.8 19.85 8.45Q20.65 8.225 21.3 8.762Q21.95 9.3 21.95 10.15Q21.95 10.7 21.613 11.125Q21.275 11.55 20.75 11.7Z"/>
    </Icon>
  )
});

export default IconMaterialFlightTakeoffOutlinedFilled;
