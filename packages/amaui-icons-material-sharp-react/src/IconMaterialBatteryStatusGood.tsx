import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryStatusGood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGood'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M638-113 524-226l57-56 57 56 141-141 57 56-198 198ZM280-80v-720h120v-80h160v80h120v320q-21 0-41 3.5T600-466v-254H360v560h94q8 23 19.5 43T501-80H280Zm80-80h94-14 14-94Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGood.displayName = 'AmauiIconMaterialBatteryStatusGood';

export default IconMaterialBatteryStatusGood;
