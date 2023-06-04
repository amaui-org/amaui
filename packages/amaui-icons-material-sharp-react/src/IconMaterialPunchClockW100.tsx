import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPunchClockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClockW100'

      short_name='PunchClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 21.35V6.65h3v-5h10.7v5h3v14.7Zm3.7-14.7h9.3v-4.3h-9.3Zm-3 14h15.3V7.35H4.35ZM12 18.6q-1.9 0-3.25-1.35T7.4 14q0-1.9 1.35-3.25T12 9.4q1.9 0 3.25 1.35T16.6 14q0 1.9-1.35 3.25T12 18.6Zm0-.7q1.625 0 2.762-1.138Q15.9 15.625 15.9 14t-1.138-2.762Q13.625 10.1 12 10.1t-2.762 1.138Q8.1 12.375 8.1 14t1.138 2.762Q10.375 17.9 12 17.9Zm1.15-2.25-1.5-1.5v-2.5h.7v2.2l1.3 1.3ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPunchClockW100.displayName = 'AmauiIconMaterialPunchClockW100';

export default IconMaterialPunchClockW100;
