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
      <path d="m638-226 113-113q12-12 28-12t28 12q12 12 12 28.5T807-282L666-141q-12 12-28.5 12T609-141l-56-57q-12-12-12-28t12-28q12-12 28-11.5t28 11.5l29 28ZM320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v280q-21 0-41 3.5T600-466v-254H360v560h94q8 23 19.5 43T501-80H320Zm40-80h94-14 14-94Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGood.displayName = 'AmauiIconMaterialBatteryStatusGood';

export default IconMaterialBatteryStatusGood;
