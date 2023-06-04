import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightTakeoffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffW100Filled'

      short_name='FlightTakeoff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.475 20.35v-.7h16.7v.7Zm1.5-5.1-2.1-3.65.65-.15 1.8 1.55 5.6-1.5-4.05-6.85.8-.25 6.85 6.1 5.3-1.4q.5-.125.9.187.4.313.4.813 0 .35-.187.6-.188.25-.513.35Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffW100Filled.displayName = 'AmauiIconMaterialFlightTakeoffW100Filled';

export default IconMaterialFlightTakeoffW100Filled;
