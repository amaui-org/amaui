import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOff'

      short_name='SignalCellularOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22.1 19.15-8.6-8.55 6.9-6.9q.475-.475 1.088-.213.612.263.612.938ZM4.525 22q-.675 0-.937-.613-.263-.612.212-1.087l6.9-6.9-7.5-7.5q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.687.275-.413 0-.713-.275l-.95-.9Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOff.displayName = 'AmauiIconMaterialSignalCellularOff';

export default IconMaterialSignalCellularOff;
