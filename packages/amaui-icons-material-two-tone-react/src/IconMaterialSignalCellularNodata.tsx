import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNodata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNodata'

      short_name='SignalCellularNodata'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M22,13h-9v9H2L22,2V13z M21,15.41L19.59,14l-2.09,2.09L15.41,14L14,15.41l2.09,2.09L14,19.59L15.41,21l2.09-2.08L19.59,21 L21,19.59l-2.08-2.09L21,15.41z"/></g></g>
    </Icon>
  );
});

IconMaterialSignalCellularNodata.displayName = 'AmauiIconMaterialSignalCellularNodata';

export default IconMaterialSignalCellularNodata;
