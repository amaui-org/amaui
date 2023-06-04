import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightLandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandFilled'

      short_name='FlightLand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm15.85-5.1L3 11.5V6l1.5.5.7 2.1L10 9.95V2l2 .5 2.75 8.75 5 1.4q.575.15.913.612.337.463.337 1.038 0 .825-.675 1.325t-1.475.275Z"/>
    </Icon>
  );
});

IconMaterialFlightLandFilled.displayName = 'AmauiIconMaterialFlightLandFilled';

export default IconMaterialFlightLandFilled;
