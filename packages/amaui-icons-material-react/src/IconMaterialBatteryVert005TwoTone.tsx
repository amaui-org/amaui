import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVert005TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVert005TwoTone'
      short_name='BatteryVert005'

      {...props}
    >
      <path d="M7.725 22.575q-.625 0-1.062-.438-.438-.437-.438-1.062V4.9q0-.625.438-1.063Q7.1 3.4 7.725 3.4h1.8V1.425H14.5V3.4h1.8q.6 0 1.05.437.45.438.45 1.063v16.175q0 .625-.45 1.062-.45.438-1.05.438ZM9.25 18.55h5.525V6.425H9.25Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryVert005TwoTone;
