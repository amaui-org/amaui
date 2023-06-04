import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiAddW100'

      short_name='WifiAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M734 744H628q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V610q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T877.975 740q-4.025 4-9.975 4H762v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T738 859.975q-4-4.025-4-9.975V744Zm-275 97L98.235 480.234Q88 470 89 456.5q1-13.5 12-21.5 81-63 178.884-95 97.883-32 199.914-32Q581 308 680.5 340t179.794 94.865Q871 443 871.5 456.674 872 470.348 862 480l-30 30q-8-3-15.5-5t-15.5-4l43-43q-79-60-172-91t-192-31q-99 0-192 31t-172 91l364 364 39-39q2 8 4 15.5t5 15.5l-27 27q-9 9-21 9t-21-9Zm21-262Z"/>
    </Icon>
  );
});

IconMaterialWifiAddW100.displayName = 'AmauiIconMaterialWifiAddW100';

export default IconMaterialWifiAddW100;
