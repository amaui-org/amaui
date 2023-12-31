import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedW100'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-479Zm1 342q-5 0-11-1t-11.021-3Q346-186 279.5-290 213-394 212-515v-167q0-19.257 10.875-34.662Q233.75-732.068 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.932 28.125 22.338Q748-701.257 748-682v176q-7-1-13.552-1.5-6.551-.5-13.448-.5h-1v-175q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132q10.672-3.111 20.836-7.556Q511-176 521-181v31.333q-5 1.667-9.5 4.167T503-141q-5 2-11 3t-11 1Zm168 5q-14 0-25-11t-11-25v-106q0-14 11-24t25-10h4v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h4q14.412 0 24.706 10Q828-288 828-274v106q0 14-10.294 25T793-132H649Zm32-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedW100.displayName = 'AmauiIconMaterialShieldLockedW100';

export default IconMaterialShieldLockedW100;
