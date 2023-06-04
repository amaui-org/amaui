import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddW100'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m132 924 696-696v337q-7-2-13.5-3t-14.5-3V296L200 896h351q4 8 7.5 14.5T567 924H132Zm614 0V804H626v-28h120V656h28v120h120v28H774v120h-28Zm-546-28 600-600-170 170-139 139-134 134-157 157Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddW100.displayName = 'AmauiIconMaterialSignalCellularAddW100';

export default IconMaterialSignalCellularAddW100;
