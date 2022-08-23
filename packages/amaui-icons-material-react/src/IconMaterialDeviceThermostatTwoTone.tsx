import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceThermostatTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostatTwoTone'
      short_name='DeviceThermostat'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M15,13V5c0-1.66-1.34-3-3-3S9,3.34,9,5v8c-1.21,0.91-2,2.37-2,4c0,2.76,2.24,5,5,5s5-2.24,5-5C17,15.37,16.21,13.91,15,13 z M11,11V5c0-0.55,0.45-1,1-1s1,0.45,1,1v1h-1v1h1v1v1h-1v1h1v1H11z"/></g></g>
    </Icon>
  );
});

IconMaterialDeviceThermostatTwoTone.displayName = 'AmauiIconMaterialDeviceThermostatTwoTone';

export default IconMaterialDeviceThermostatTwoTone;
