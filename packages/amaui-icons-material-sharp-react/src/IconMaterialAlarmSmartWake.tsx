import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmSmartWake = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmSmartWake'

      short_name='AlarmSmartWake'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 656q17 0 28.5-11.5T360 616q0-17-11.5-28.5T320 576q-17 0-28.5 11.5T280 616q0 17 11.5 28.5T320 656Zm160 0q17 0 28.5-11.5T520 616q0-17-11.5-28.5T480 576q-17 0-28.5 11.5T440 616q0 17 11.5 28.5T480 656Zm160 0q17 0 28.5-11.5T680 616q0-17-11.5-28.5T640 576q-17 0-28.5 11.5T600 616q0 17 11.5 28.5T640 656ZM480 976q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120 616q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480 256q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840 616q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480 976Zm0-360ZM224 190l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480 896q117 0 198.5-81.5T760 616q0-117-81.5-198.5T480 336q-117 0-198.5 81.5T200 616q0 117 81.5 198.5T480 896Z"/>
    </Icon>
  );
});

IconMaterialAlarmSmartWake.displayName = 'AmauiIconMaterialAlarmSmartWake';

export default IconMaterialAlarmSmartWake;
