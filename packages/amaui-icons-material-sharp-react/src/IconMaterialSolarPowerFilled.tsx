import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSolarPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerFilled'

      short_name='SolarPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 4V2h3v2ZM2 22h9v-4H2.8ZM6.125 9.325 4.7 7.925 6.825 5.8 8.25 7.2ZM3.2 16H11v-4H4ZM12 7Q9.925 7 8.463 5.537 7 4.075 7 2h10q0 2.075-1.462 3.537Q14.075 7 12 7Zm-1 4V8h2v3Zm2 11h9l-.8-4H13Zm0-6h7.8l-.8-4h-7Zm4.875-6.675-2.1-2.125 1.4-1.4L19.3 7.9ZM18 4V2h3v2Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerFilled.displayName = 'AmauiIconMaterialSolarPowerFilled';

export default IconMaterialSolarPowerFilled;
