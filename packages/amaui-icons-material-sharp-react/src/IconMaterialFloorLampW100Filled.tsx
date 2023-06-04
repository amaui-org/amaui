import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampW100Filled'

      short_name='FloorLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19v-8H6.4l2-6.4h7.2l2 6.4h-5.25v8Zm-3 1.7V20h6.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFloorLampW100Filled.displayName = 'AmauiIconMaterialFloorLampW100Filled';

export default IconMaterialFloorLampW100Filled;
