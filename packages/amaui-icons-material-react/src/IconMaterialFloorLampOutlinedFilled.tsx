import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFloorLampOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorLampOutlinedFilled'
      short_name='FloorLamp'

      {...props}
    >
      <path d="M11 19v-8H6q-.5 0-.8-.4-.3-.4-.15-.9L7 3.4q.2-.65.725-1.025Q8.25 2 8.9 2h6.2q.65 0 1.175.375T17 3.4l1.95 6.3q.15.5-.15.9t-.8.4h-5v8Zm-3 3v-2h8v2Z"/>
    </Icon>
  )
});

export default IconMaterialFloorLampOutlinedFilled;
