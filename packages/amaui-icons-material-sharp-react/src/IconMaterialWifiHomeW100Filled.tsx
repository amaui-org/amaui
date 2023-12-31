import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiHomeW100Filled'

      short_name='WifiHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-375l-79 61-17-22 364-279 364 279-17 22-80-61v65q-5-1-10.5-1H726q-118 0-202 82.5T438-240v14q0 7 1 14H212ZM666-54H538v-28h79q-35-29-57-70t-22-86q0-62 36-109.5t92-65.5v29q-44 17-72 56.5T566-238q0 39 20 75t52 62v-81h28v128Zm100-9v-30q45-17 72.5-57t27.5-88q0-39-20-75t-52-62v81h-28v-128h128v28h-79q35 29 57 70t22 86q0 62-36 109.5T766-63Z"/>
    </Icon>
  );
});

IconMaterialWifiHomeW100Filled.displayName = 'AmauiIconMaterialWifiHomeW100Filled';

export default IconMaterialWifiHomeW100Filled;
