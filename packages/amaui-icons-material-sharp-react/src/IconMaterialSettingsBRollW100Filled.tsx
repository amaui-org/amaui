import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBRollW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBRollW100Filled'

      short_name='SettingsBRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m668-199 93-93-93-93-20 20 60 59H574v28h133l-59 59 20 20Zm0 67q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm-252 0-14-112q-25-7-47.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-24.5T230-479q0-13 1.5-26t3.5-26l-89-67 64-110 102 43q20-17 42-30t47-21l15-112h128l14 113q24 8 45.5 20.5T644-665l106-43 64 110-74 56q-18-5-36-7.5t-36-2.5q-30 0-58.5 7.5T554-524q-11-20-32-32t-44-12q-37 0-62.5 25.5T390-480q0 23 11.5 43.5T433-404q-14 31-19 64t-5 67q3 38 16.5 74.5T463-132h-47Z"/>
    </Icon>
  );
});

IconMaterialSettingsBRollW100Filled.displayName = 'AmauiIconMaterialSettingsBRollW100Filled';

export default IconMaterialSettingsBRollW100Filled;
