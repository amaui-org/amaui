import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAddFilled'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 976V856H600v-80h120V656h80v120h120v80H800v120h-80Zm-640 0 799-799v425q-26-16-57-23.5t-62-7.5q-102 0-173.5 71.5T515 816q0 46 15 85.5t45 74.5H80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAddFilled.displayName = 'AmauiIconMaterialSignalCellularAddFilled';

export default IconMaterialSignalCellularAddFilled;
