import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightLandRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandRoundedW100Filled'
      short_name='FlightLand'

      {...props}
    >
      <path d="M4 20.35Q3.85 20.35 3.75 20.25Q3.65 20.15 3.65 20Q3.65 19.85 3.75 19.75Q3.85 19.65 4 19.65H20Q20.15 19.65 20.25 19.75Q20.35 19.85 20.35 20Q20.35 20.15 20.25 20.25Q20.15 20.35 20 20.35ZM19 15.25 4.2 11.15Q3.95 11.075 3.8 10.875Q3.65 10.675 3.65 10.425V7.325Q3.65 7.15 3.775 7.05Q3.9 6.95 4.075 7Q4.15 7.025 4.213 7.087Q4.275 7.15 4.3 7.225L4.95 9.2L10.65 10.8V3.475Q10.65 3.2 10.825 3.075Q11 2.95 11.275 3Q11.375 3.025 11.45 3.1Q11.525 3.175 11.575 3.275L14.25 11.8L19.6 13.3Q19.95 13.375 20.15 13.662Q20.35 13.95 20.35 14.3Q20.35 14.8 19.925 15.1Q19.5 15.4 19 15.25Z"/>
    </Icon>
  );
});

IconMaterialFlightLandRoundedW100Filled.displayName = 'AmauiIconMaterialFlightLandRoundedW100Filled';

export default IconMaterialFlightLandRoundedW100Filled;
