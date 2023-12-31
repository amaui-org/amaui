import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTowingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTowingW100Filled'

      short_name='AutoTowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M72-312v-56h426L114-670v144H86v-188h8l498 276v-290h124l172 206v210h-86q17 42-9 81t-73 39q-47 0-73-39t-9-81H342q17 42-9 81t-73 39q-47 0-73-39t-9-81H72Zm188 92q26 0 43-18t17-42q0-24-17-42t-43-18q-26 0-43 18t-17 42q0 24 17 42t43 18Zm460 0q26 0 43-18t17-42q0-24-17-42t-43-18q-26 0-43 18t-17 42q0 24 17 42t43 18ZM620-522h232L702-700h-82v178Z"/>
    </Icon>
  );
});

IconMaterialAutoTowingW100Filled.displayName = 'AmauiIconMaterialAutoTowingW100Filled';

export default IconMaterialAutoTowingW100Filled;
