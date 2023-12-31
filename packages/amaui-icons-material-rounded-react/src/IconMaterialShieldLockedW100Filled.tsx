import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockedW100Filled'

      short_name='ShieldLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-139q-6.16 0-11.44-1-5.28-1-10.56-3-114-45-180-147.5T212-516v-166q0-19.257 10.875-34.662Q233.75-732.068 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.932 28.125 22.338Q748-701.257 748-682v176q-7.105-1-13.5-1.5T721-508q-83 1-141.5 59.208Q521-390.585 521-308v158q-5 2-9.667 3.667L502-143q-5.28 2-10.56 3T480-139Zm169 7q-14.824 0-25.412-10.588T613-168v-106q0-14 10.588-24T649-308h4v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h4q14.412 0 24.706 10Q828-288 828-274v106q0 14.824-10 25.412T793-132H649Zm32-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40Z"/>
    </Icon>
  );
});

IconMaterialShieldLockedW100Filled.displayName = 'AmauiIconMaterialShieldLockedW100Filled';

export default IconMaterialShieldLockedW100Filled;
