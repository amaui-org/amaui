import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSlowMotionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSlowMotionW100Filled'

      short_name='SettingsSlowMotion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m416-132-14-112q-25-7-47.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-24.5T230-479q0-13 1.5-26t3.5-26l-89-67 64-110 102 43q20-17 42-30t47-21l15-112h128l14 113q24 8 45.5 20.5T644-665l106-43 64 110-74 56q-18-5-36-7.5t-36-2.5q-30 0-58.5 7.5T554-524q-11-20-32-32t-44-12q-37 0-62.5 25.5T390-480q0 23 11.5 43.5T433-404q-14 31-19 64t-5 67q3 38 16.5 74.5T463-132h-47Zm225-4q-50-9-85.5-44.5T512-266h25q8 39 36.5 67.5T641-162v26Zm52 1v-27q45-9 75.5-45.5T799-292q0-48-30.5-84.5T693-422v-27q57 9 95.5 53T827-292q0 60-38.5 104T693-135ZM512-318q8-50 43.5-85.5T641-448v26q-39 8-67.5 36.5T537-318h-25Zm123 90v-128l98 64-98 64Z"/>
    </Icon>
  );
});

IconMaterialSettingsSlowMotionW100Filled.displayName = 'AmauiIconMaterialSettingsSlowMotionW100Filled';

export default IconMaterialSettingsSlowMotionW100Filled;
