import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceResetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceResetW100'

      short_name='DeviceReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.275 15.75-3.6-3.6V7h.7v4.85l3.4 3.4ZM11.95 19.7q-2.925 0-5.1-1.9T4.325 13h.7q.425 2.575 2.363 4.288Q9.325 19 11.95 19q2.925 0 4.963-2.038Q18.95 14.925 18.95 12t-2.037-4.963Q14.875 5 11.95 5q-1.5 0-2.825.612Q7.8 6.225 6.75 7.3h2.4V8h-3.6V4.4h.7v2.4q1.125-1.175 2.6-1.838 1.475-.662 3.1-.662 1.6 0 3 .6t2.45 1.65Q18.45 7.6 19.05 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45-1.05 1.05-2.45 1.65-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialDeviceResetW100.displayName = 'AmauiIconMaterialDeviceResetW100';

export default IconMaterialDeviceResetW100;
