import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplanemodeInactiveSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeInactiveSharp'
      short_name='AirplanemodeInactive'

      {...props}
    >
      <path d="M22 16 17.5 14.65 10.5 7.65V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V9L22 14ZM19.8 22.6 13.5 16.3V19L15.5 20.5V22L12 21L8.5 22V20.5L10.5 19V13.5L2 16V14L7.75 10.6L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeInactiveSharp.displayName = 'AmauiIconMaterialAirplanemodeInactiveSharp';

export default IconMaterialAirplanemodeInactiveSharp;
