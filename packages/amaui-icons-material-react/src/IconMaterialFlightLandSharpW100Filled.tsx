import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightLandSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandSharpW100Filled'
      short_name='FlightLand'

      {...props}
    >
      <path d="M3.65 20.35V19.65H20.35V20.35ZM19 15.25 3.65 11V6.9L4.25 7.05L4.95 9.2L10.65 10.8V2.85L11.5 3.05L14.25 11.8L19.6 13.3Q19.95 13.4 20.15 13.675Q20.35 13.95 20.35 14.3Q20.35 14.8 19.925 15.1Q19.5 15.4 19 15.25Z"/>
    </Icon>
  );
});

IconMaterialFlightLandSharpW100Filled.displayName = 'AmauiIconMaterialFlightLandSharpW100Filled';

export default IconMaterialFlightLandSharpW100Filled;
