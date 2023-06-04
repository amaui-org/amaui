import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddW100Filled'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M746 924V804H626v-28h120V656h28v120h120v28H774v120h-28Zm-614 0 696-696v337q-14-5-34-7.5t-34-2.5q-97.837 0-166.418 68.582Q525 692.163 525 790q0 35 11 70t31 64H132Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddW100Filled.displayName = 'AmauiIconMaterialSignalCellularAddW100Filled';

export default IconMaterialSignalCellularAddW100Filled;
