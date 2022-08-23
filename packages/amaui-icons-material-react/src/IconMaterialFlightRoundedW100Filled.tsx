import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightRoundedW100Filled'
      short_name='Flight'

      {...props}
    >
      <path d="M9.55 21.025Q9.375 21.075 9.262 20.987Q9.15 20.9 9.15 20.725Q9.15 20.625 9.2 20.525Q9.25 20.425 9.325 20.375L11.15 19.05V12.65L3.15 15Q2.95 15.05 2.8 14.95Q2.65 14.85 2.65 14.625Q2.65 14.5 2.713 14.387Q2.775 14.275 2.875 14.225L11.15 9.35V3.5Q11.15 3.125 11.387 2.887Q11.625 2.65 12 2.65Q12.375 2.65 12.613 2.887Q12.85 3.125 12.85 3.5V9.35L21.125 14.225Q21.225 14.275 21.288 14.387Q21.35 14.5 21.35 14.625Q21.35 14.85 21.2 14.95Q21.05 15.05 20.85 15L12.85 12.65V19L14.675 20.375Q14.75 20.425 14.8 20.525Q14.85 20.625 14.85 20.725Q14.85 20.9 14.738 20.987Q14.625 21.075 14.45 21.025L12 20.3Z"/>
    </Icon>
  );
});

IconMaterialFlightRoundedW100Filled.displayName = 'AmauiIconMaterialFlightRoundedW100Filled';

export default IconMaterialFlightRoundedW100Filled;
