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
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134ZM372-338h216v-176h-39v-40q0-29-19.5-48.5T481-622q-29 0-48.5 19.5T413-554v40h-41v176Zm69-176v-40q0-17 11.5-28.5T481-594q17 0 28.5 11.5T521-554v40h-80Z"/>
    </Icon>
  );
});

IconMaterialShieldLockW100Filled.displayName = 'AmauiIconMaterialShieldLockW100Filled';

export default IconMaterialShieldLockW100Filled;
