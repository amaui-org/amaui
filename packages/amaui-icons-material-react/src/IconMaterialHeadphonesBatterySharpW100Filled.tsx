import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadphonesBatterySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadphonesBatterySharpW100Filled'
      short_name='HeadphonesBattery'

      {...props}
    >
      <path d="M2.8 17.35V11.95Q2.8 9.775 4.312 8.262Q5.825 6.75 8 6.75Q10.175 6.75 11.688 8.262Q13.2 9.775 13.2 11.95V17.35H10.8V13.15H12.5V11.95Q12.5 10.075 11.188 8.762Q9.875 7.45 8 7.45Q6.125 7.45 4.812 8.762Q3.5 10.075 3.5 11.95V13.15H5.2V17.35ZM16.75 17.35V7.45H18.65V6.75H19.35V7.45H21.25V17.35Z"/>
    </Icon>
  );
});

IconMaterialHeadphonesBatterySharpW100Filled.displayName = 'AmauiIconMaterialHeadphonesBatterySharpW100Filled';

export default IconMaterialHeadphonesBatterySharpW100Filled;
