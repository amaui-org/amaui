import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxW100Filled'

      short_name='HomeMax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 17.4v-.7H5q-1.125 0-1.912-.788Q2.3 15.125 2.3 14V9q0-1.125.788-1.912Q3.875 6.3 5 6.3h14q1.125 0 1.913.788.787.787.787 1.912v5q0 1.125-.787 1.912-.788.788-1.913.788h-3.3v.7Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxW100Filled.displayName = 'AmauiIconMaterialHomeMaxW100Filled';

export default IconMaterialHomeMaxW100Filled;
