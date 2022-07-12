import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorOutlinedW700Filled'
      short_name='Monitor'

      {...props}
    >
      <path d="M5.625 22.225V19.85L7 18.45H4.3Q2.975 18.45 2.062 17.538Q1.15 16.625 1.15 15.3V5.3Q1.15 3.975 2.062 3.062Q2.975 2.15 4.3 2.15H19.7Q21.025 2.15 21.938 3.062Q22.85 3.975 22.85 5.3V15.3Q22.85 16.625 21.938 17.538Q21.025 18.45 19.7 18.45H17L18.375 19.85V22.225Z"/>
    </Icon>
  )
});

export default IconMaterialMonitorOutlinedW700Filled;
