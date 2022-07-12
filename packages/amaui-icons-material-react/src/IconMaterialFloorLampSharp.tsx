import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampSharp'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8ZM7.35 9h9.3L15.1 4H8.9ZM8 22v-2h8v2Zm4-15.5Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampSharp;
