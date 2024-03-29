import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAdd'

      short_name='SignalCellularAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m80 976 799-799v425q-18-11-38-17.5T799 574V370L273 896h255q8 23 20 43t27 37H80Zm640 0V856H600v-80h120V656h80v120h120v80H800v120h-80Zm-447-80 526-526-136.5 136.5-121 121L418 751 273 896Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAdd.displayName = 'AmauiIconMaterialSignalCellularAdd';

export default IconMaterialSignalCellularAdd;
