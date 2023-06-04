import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxW100Filled'

      short_name='NightSightMax'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M706 390H600q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V256q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T849.975 386q-4.025 4-9.975 4H734v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T710 505.975q-4-4.025-4-9.975V390Zm2 346q-35 80-107.365 127-72.366 47-160.661 47Q318 910 232 824q-86-86-86-208 0-105.911 66-186.955Q278 348 381 328q5-1 8.5 1t5.5 5q2 3 2.5 6.5T396 349q-11 25.559-16.5 52.279Q374 428 374 456q0 110.833 77.583 188.417Q529.167 722 640 722q13.484 0 25.742-1.5Q678 719 691 717q5-1 8.833.5 3.834 1.5 6.167 4.5 2 3 3 6.5t-1 7.5Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxW100Filled.displayName = 'AmauiIconMaterialNightSightMaxW100Filled';

export default IconMaterialNightSightMaxW100Filled;
