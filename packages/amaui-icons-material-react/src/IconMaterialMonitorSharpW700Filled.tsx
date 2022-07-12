import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorSharpW700Filled'
      short_name='Monitor'

      {...props}
    >
      <path d="M5.625 22.225V19.85L7 18.45H1.15V2.15H22.85V18.45H17L18.375 19.85V22.225Z"/>
    </Icon>
  )
});

export default IconMaterialMonitorSharpW700Filled;
