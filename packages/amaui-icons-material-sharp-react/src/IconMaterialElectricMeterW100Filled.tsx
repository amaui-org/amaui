import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMeterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeterW100Filled'

      short_name='ElectricMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 20.3v-2q-2.35-.75-3.85-2.75t-1.5-4.6q0-1.6.6-3T6.55 5.5Q7.6 4.45 9 3.85q1.4-.6 2.975-.6 1.6 0 3 .6t2.45 1.65q1.05 1.05 1.663 2.45.612 1.4.612 3 0 2.575-1.5 4.575t-3.85 2.75V20.3h-.7v-1.825q-.425.1-.838.137-.412.038-.837.038t-.825-.038q-.4-.037-.8-.137V20.3Zm-1-11.95h6.7v-.7h-6.7Zm2.6 7.725 1.95-1.95-1.25-1.25 1.375-1.375-.575-.575-1.95 1.95 1.25 1.25-1.375 1.375Z"/>
    </Icon>
  );
});

IconMaterialElectricMeterW100Filled.displayName = 'AmauiIconMaterialElectricMeterW100Filled';

export default IconMaterialElectricMeterW100Filled;
