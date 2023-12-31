import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularPause = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularPause'

      short_name='SignalCellularPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v440h-80v-247L273-160h247v80H80Zm520 0v-280h80v280h-80Zm160 0v-280h80v280h-80ZM537-424Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPause.displayName = 'AmauiIconMaterialSignalCellularPause';

export default IconMaterialSignalCellularPause;
