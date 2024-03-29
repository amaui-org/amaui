import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOffFilled'

      short_name='DevicesOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m354 336-80-80h526q17 0 28.5 11.5T840 296q0 17-11.5 28.5T800 336H354Zm526 526-80-80V496H640v126l-80-80v-86q0-17 11.5-28.5T600 416h240q17 0 28.5 11.5T880 456v406ZM764 973l-78-77h-86q-17 0-28.5-11.5T560 856v-88L240 448v328h240v120H140q-25 0-42.5-17.5T80 836q0-25 17.5-42.5T140 776h20V368l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11.5 27.5T820 972q-11 11-27.5 11.5T764 973Z"/>
    </Icon>
  );
});

IconMaterialDevicesOffFilled.displayName = 'AmauiIconMaterialDevicesOffFilled';

export default IconMaterialDevicesOffFilled;
