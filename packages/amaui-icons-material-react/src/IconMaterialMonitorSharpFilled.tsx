import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorSharpFilled'
      short_name='Monitor'

      {...props}
    >
      <path d="M6 21V19L7 18H2V3H22V18H17L18 19V21Z"/>
    </Icon>
  );
});

export default IconMaterialMonitorSharpFilled;
