import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassW100Filled'

      short_name='FlightClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.325 11.7V5.3H16.7v6.4Zm-4.35 5L6.3 8.075V5.3H7V8l2.5 8h7.875v.7Zm-.325 3V19h8.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFlightClassW100Filled.displayName = 'AmauiIconMaterialFlightClassW100Filled';

export default IconMaterialFlightClassW100Filled;
