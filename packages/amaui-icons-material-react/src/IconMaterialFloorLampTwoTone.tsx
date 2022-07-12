import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampTwoTone'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11 19v-8H6q-.5 0-.8-.4-.3-.4-.15-.9L7 3.4q.2-.65.725-1.025Q8.25 2 8.9 2h6.2q.65 0 1.175.375T17 3.4l1.95 6.3q.15.5-.15.9t-.8.4h-5v8ZM7.35 9h9.3L15.1 4H8.9ZM8 22v-2h8v2Zm4-15.5Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampTwoTone;
