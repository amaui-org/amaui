import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightsmodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightsmodeW100Filled'

      short_name='Flightsmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m188-348 18-18 98 14 180-180-310-170 22-24 382 100 166-166q10-10 24-10t24 10q10 10 10 24t-10 24L626-578l100 382-24 22-170-310-180 180 14 98-18 18-56-104-104-56Z"/>
    </Icon>
  );
});

IconMaterialFlightsmodeW100Filled.displayName = 'AmauiIconMaterialFlightsmodeW100Filled';

export default IconMaterialFlightsmodeW100Filled;
