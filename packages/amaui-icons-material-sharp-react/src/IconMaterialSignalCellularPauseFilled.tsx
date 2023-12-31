import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularPauseFilled'

      short_name='SignalCellularPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-80v-280h80v280h-80Zm160 0v-280h80v280h-80ZM80-80l800-800v440H520v360H80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPauseFilled.displayName = 'AmauiIconMaterialSignalCellularPauseFilled';

export default IconMaterialSignalCellularPauseFilled;
