import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetectorBatteryTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorBatteryTwoTone'
      short_name='DetectorBattery'

      {...props}
    >
      <path d="M9.4 18.95h7.225v-2.225H9.4ZM8.35 9.1h7.325l.3-1.125h-7.95L8.35 9.1Zm0 3.025q-1.075 0-1.9-.65t-1.05-1.7l-.425-1.8h-.55q-1.25 0-2.137-.888Q1.4 6.2 1.4 4.95V.8h21.2v4.15q0 1.25-.887 2.137-.888.888-2.138.888h-.525L18.6 9.8q-.275 1.025-1.088 1.675-.812.65-1.887.65Zm-2.225 9.6q-.6 0-1.05-.45-.45-.45-.45-1.05v-4.75q0-.625.45-1.075.45-.45 1.05-.45h11.75q.625 0 1.075.45.45.45.45 1.075v.85h1.75v3.025H19.4v.875q0 .6-.45 1.05-.45.45-1.075.45Z"/>
    </Icon>
  )
});

export default IconMaterialDetectorBatteryTwoTone;
