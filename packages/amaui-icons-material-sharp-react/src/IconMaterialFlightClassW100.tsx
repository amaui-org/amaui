import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightClassW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassW100'

      short_name='FlightClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.325 11.7V5.3H16.7v6.4Zm.7-.7H16V6h-1.975Zm-5.05 5.7L6.3 8.075V5.3H7V8l2.5 8h7.875v.7Zm-.325 3V19h8.7v.7ZM14.025 6H16Z"/>
    </Icon>
  );
});

IconMaterialFlightClassW100.displayName = 'AmauiIconMaterialFlightClassW100';

export default IconMaterialFlightClassW100;
