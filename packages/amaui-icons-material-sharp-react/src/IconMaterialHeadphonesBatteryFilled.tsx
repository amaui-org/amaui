import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatteryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryFilled'

      short_name='HeadphonesBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18v-6q0-2.5 1.75-4.25T8 6q2.5 0 4.25 1.75T14 12v6h-4v-5h2.5v-1q0-1.875-1.312-3.188Q9.875 7.5 8 7.5q-1.875 0-3.188 1.312Q3.5 10.125 3.5 12v1H6v5Zm14 0V7h2V6h2v1h2v11Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryFilled.displayName = 'AmauiIconMaterialHeadphonesBatteryFilled';

export default IconMaterialHeadphonesBatteryFilled;
