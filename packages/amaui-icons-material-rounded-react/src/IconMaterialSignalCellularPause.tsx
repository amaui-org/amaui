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
      <path d="M177-80q-27 0-37.5-24.5T148-148l664-664q19-19 43.5-8.5T880-783v303q0 17-11.5 28.5T840-440q-17 0-28.5-11.5T800-480v-207L273-160h207q17 0 28.5 11.5T520-120q0 17-11.5 28.5T480-80H177Zm463 0q-17 0-28.5-11.5T600-120v-200q0-17 11.5-28.5T640-360q17 0 28.5 11.5T680-320v200q0 17-11.5 28.5T640-80Zm160 0q-17 0-28.5-11.5T760-120v-200q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320v200q0 17-11.5 28.5T800-80ZM537-424Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPause.displayName = 'AmauiIconMaterialSignalCellularPause';

export default IconMaterialSignalCellularPause;
