import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCaptivePortalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptivePortalW100Filled'

      short_name='CaptivePortal'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M445 896q-31-39-56-90t-39-104H186q37 83 103 132.5T445 896ZM175 674h169q-5-26-7-50.5t-2-47.5q0-23 2-47.5t7-50.5H175q-7 21-11 47t-4 51q0 25 4 51t11 47Zm11-224h164q12-54 38-106.5t57-87.5q-85 10-154 61T186 450Zm193 0h202q-15-57-39-102t-62-93q-38 44-61 89t-40 106Zm231 0h164q-36-82-105-133.5T515 256q26 34 52 86.5T610 450ZM480 924q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-72 27.5-135.5T234 330q47-47 110.5-74.5T480 228q72 0 135.5 27.5T726 330q47 47 74.5 110.5T828 576q0 11-.5 23t-2.5 23h-29q2-11 3-23t1-23q0-25-4-51t-11-47H616q5 26 7 50.5t2 47.5q0 11-.5 22.5T623 622h-28q1-11 1.5-23t.5-23q0-25-2-48.5t-7-49.5H372q-5 26-7 49.5t-2 48.5q0 25 2 48.5t7 49.5h154v28H379q17 60 41.5 107.5T480 897q13-15 24-31t22-33v88q-11 2-23 2.5t-23 .5Zm174-154v112q0 6-4 10t-10 4q-6 0-10-4t-4-10V752q0-13 8.5-21.5T656 722h130q6 0 10 4t4 10q0 6-4 10t-10 4H673l135 134q4 4 4 10t-4 10q-4 5-10 4.5t-10-4.5L654 770Z"/>
    </Icon>
  );
});

IconMaterialCaptivePortalW100Filled.displayName = 'AmauiIconMaterialCaptivePortalW100Filled';

export default IconMaterialCaptivePortalW100Filled;
