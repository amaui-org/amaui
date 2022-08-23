import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceResetRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceResetRoundedW100Filled'
      short_name='DeviceReset'

      {...props}
    >
      <path d="M12.45 11.85 15.6 15q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-3.125-3.125q-.125-.125-.175-.25-.05-.125-.05-.275v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25Zm-.5 7.85q-2.75 0-4.862-1.713-2.113-1.712-2.638-4.412-.05-.15.025-.275.075-.125.225-.175.15-.05.25.037.1.088.15.238.55 2.425 2.45 4.013Q9.45 19 11.95 19q2.925 0 4.963-2.038Q18.95 14.925 18.95 12t-2.037-4.963Q14.875 5 11.95 5q-1.5 0-2.825.612Q7.8 6.225 6.75 7.3H8.8q.15 0 .25.1t.1.25q0 .15-.1.25T8.8 8H6.3q-.325 0-.537-.213-.213-.212-.213-.537v-2.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.8q1.125-1.175 2.6-1.838 1.475-.662 3.1-.662 1.6 0 3 .6t2.45 1.65Q18.45 7.6 19.05 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45-1.05 1.05-2.45 1.65-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialDeviceResetRoundedW100Filled.displayName = 'AmauiIconMaterialDeviceResetRoundedW100Filled';

export default IconMaterialDeviceResetRoundedW100Filled;
