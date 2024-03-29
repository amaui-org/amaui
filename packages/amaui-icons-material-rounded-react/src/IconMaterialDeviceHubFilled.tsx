import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceHubFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubFilled'

      short_name='DeviceHub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20v-3q0-.425.288-.712Q3.575 16 4 16h3l4-4V8.8q-.9-.325-1.45-1.088Q9 6.95 9 6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6q0 .95-.55 1.712Q13.9 8.475 13 8.8V12l4 4h3q.425 0 .712.288.288.287.288.712v3q0 .425-.288.712Q20.425 21 20 21h-3q-.425 0-.712-.288Q16 20.425 16 20v-2.05l-4-4-4 4V20q0 .425-.287.712Q7.425 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubFilled.displayName = 'AmauiIconMaterialDeviceHubFilled';

export default IconMaterialDeviceHubFilled;
