import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldLockW100Filled'

      short_name='ShieldLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-516v-166q0-19.257 10.875-34.662Q233.75-732.068 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.932 28.125 22.338Q748-701.257 748-682v166q0 121-66.5 224.5T502.021-143Q497-141 491-140q-6 1-11 1t-11-1q-6-1-11.021-3Q345-188 278.5-291.5 212-395 212-516Zm190 178h156q12.75 0 21.375-8.625T588-368v-116q0-12.75-8.625-21.375T558-514h-9v-40q0-29-19.5-48.5T481-622q-29 0-48.5 19.5T413-554v40h-11q-12.75 0-21.375 8.625T372-484v116q0 12.75 8.625 21.375T402-338Zm39-176v-40q0-17 11.5-28.5T481-594q17 0 28.5 11.5T521-554v40h-80Z"/>
    </Icon>
  );
});

IconMaterialShieldLockW100Filled.displayName = 'AmauiIconMaterialShieldLockW100Filled';

export default IconMaterialShieldLockW100Filled;
