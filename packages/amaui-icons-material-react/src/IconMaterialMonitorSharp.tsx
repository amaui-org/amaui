import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorSharp'
      short_name='Monitor'

      {...props}
    >
      <path d="M6 21V19L7 18H2V3H22V18H17L18 19V21ZM4 16H20V5H4ZM4 16V5V16Z"/>
    </Icon>
  );
});

export default IconMaterialMonitorSharp;
