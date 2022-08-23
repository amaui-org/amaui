import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceHubRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubRounded'
      short_name='DeviceHub'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V17Q3 16.575 3.288 16.288Q3.575 16 4 16H7L11 12V8.8Q10.1 8.475 9.55 7.712Q9 6.95 9 6Q9 4.75 9.875 3.875Q10.75 3 12 3Q13.25 3 14.125 3.875Q15 4.75 15 6Q15 6.95 14.45 7.712Q13.9 8.475 13 8.8V12L17 16H20Q20.425 16 20.712 16.288Q21 16.575 21 17V20Q21 20.425 20.712 20.712Q20.425 21 20 21H17Q16.575 21 16.288 20.712Q16 20.425 16 20V17.95L12 13.95L8 17.95V20Q8 20.425 7.713 20.712Q7.425 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubRounded.displayName = 'AmauiIconMaterialDeviceHubRounded';

export default IconMaterialDeviceHubRounded;
