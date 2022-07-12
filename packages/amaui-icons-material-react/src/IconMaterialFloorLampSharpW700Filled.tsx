import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampSharpW700Filled'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M10.425 18.975V11h-6.45l3.1-10h9.85l3.1 10h-6.45v7.975Zm-3 4.15v-3.15h9.15v3.15Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampSharpW700Filled;
