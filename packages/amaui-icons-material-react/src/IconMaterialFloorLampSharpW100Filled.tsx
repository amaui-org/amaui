import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampSharpW100Filled'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11.65 19v-8H6.4l2-6.4h7.2l2 6.4h-5.25v8Zm-3 1.7V20h6.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFloorLampSharpW100Filled.displayName = 'AmauiIconMaterialFloorLampSharpW100Filled';

export default IconMaterialFloorLampSharpW100Filled;
