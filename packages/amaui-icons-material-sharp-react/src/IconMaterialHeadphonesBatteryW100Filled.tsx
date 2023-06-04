import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatteryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatteryW100Filled'

      short_name='HeadphonesBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.8 17.35v-5.4q0-2.175 1.512-3.688Q5.825 6.75 8 6.75q2.175 0 3.688 1.512Q13.2 9.775 13.2 11.95v5.4h-2.4v-4.2h1.7v-1.2q0-1.875-1.312-3.188Q9.875 7.45 8 7.45q-1.875 0-3.188 1.312Q3.5 10.075 3.5 11.95v1.2h1.7v4.2Zm13.95 0v-9.9h1.9v-.7h.7v.7h1.9v9.9Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatteryW100Filled.displayName = 'AmauiIconMaterialHeadphonesBatteryW100Filled';

export default IconMaterialHeadphonesBatteryW100Filled;
