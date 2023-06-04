import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorDoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorDoor'

      short_name='SensorDoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M18,4v16H6V4H18 M15.5,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5c0.83,0,1.5-0.67,1.5-1.5 S16.33,10.5,15.5,10.5z" opacity=".3"/><path d="M18,4v16H6V4H18 M18,2H6C4.9,2,4,2.9,4,4v18h16V4C20,2.9,19.1,2,18,2L18,2z M15.5,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5c0.83,0,1.5-0.67,1.5-1.5S16.33,10.5,15.5,10.5z"/></g>
    </Icon>
  );
});

IconMaterialSensorDoor.displayName = 'AmauiIconMaterialSensorDoor';

export default IconMaterialSensorDoor;
