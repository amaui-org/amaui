import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightTakeoffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffFilled'

      short_name='FlightTakeoff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm1.85-5L2 11.15l1.55-.3L5.3 12.4l4.8-1.3-4.05-6.85L8 3.65l6.85 6.15 5-1.35q.8-.225 1.45.312.65.538.65 1.388 0 .55-.337.975-.338.425-.863.575Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffFilled.displayName = 'AmauiIconMaterialFlightTakeoffFilled';

export default IconMaterialFlightTakeoffFilled;
