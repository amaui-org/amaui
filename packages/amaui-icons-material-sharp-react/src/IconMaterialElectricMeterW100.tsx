import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMeterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeterW100'

      short_name='ElectricMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 20.3v-2q-2.35-.75-3.85-2.75t-1.5-4.6q0-1.6.6-3T6.55 5.5Q7.6 4.45 9 3.85q1.4-.6 2.975-.6 1.6 0 3 .6t2.45 1.65q1.05 1.05 1.663 2.45.612 1.4.612 3 0 2.575-1.5 4.575t-3.85 2.75V20.3h-.7v-1.825q-.425.1-.838.137-.412.038-.837.038t-.825-.038q-.4-.037-.8-.137V20.3ZM12 18q2.9 0 4.95-2.05Q19 13.9 19 11q0-2.9-2.05-4.95Q14.9 4 12 4 9.1 4 7.05 6.05 5 8.1 5 11q0 2.9 2.05 4.95Q9.1 18 12 18ZM8.65 8.35h6.7v-.7h-6.7Zm2.6 7.725 1.95-1.95-1.25-1.25 1.375-1.375-.575-.575-1.95 1.95 1.25 1.25-1.375 1.375ZM12 11Z"/>
    </Icon>
  );
});

IconMaterialElectricMeterW100.displayName = 'AmauiIconMaterialElectricMeterW100';

export default IconMaterialElectricMeterW100;
