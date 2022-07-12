import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampSharpFilled'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8Zm-3 3v-2h8v2Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampSharpFilled;
