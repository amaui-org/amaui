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
      <path d="M4.425 22q-.675 0-.938-.613-.262-.612.213-1.087L20.3 3.7q.475-.475 1.088-.213.612.263.612.938V13h-7q-.825 0-1.412.587Q13 14.175 13 15v7ZM14.7 20.3q-.275-.275-.275-.7 0-.425.275-.7l1.4-1.4-1.4-1.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.4 1.4 1.4-1.4q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-1.4 1.4 1.4 1.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-1.4-1.4-1.4 1.4q-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNodata.displayName = 'AmauiIconMaterialSignalCellularNodata';

export default IconMaterialSignalCellularNodata;
