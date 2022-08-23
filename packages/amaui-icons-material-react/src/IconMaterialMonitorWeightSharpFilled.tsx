import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorWeightSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorWeightSharpFilled'
      short_name='MonitorWeight'

      {...props}
    >
      <path d="M12 12Q13.25 12 14.125 11.125Q15 10.25 15 9Q15 7.75 14.125 6.875Q13.25 6 12 6Q10.75 6 9.875 6.875Q9 7.75 9 9Q9 10.25 9.875 11.125Q10.75 12 12 12ZM10 9.5V8.5H11V9.5ZM11.5 9.5V8.5H12.5V9.5ZM13 9.5V8.5H14V9.5ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialMonitorWeightSharpFilled.displayName = 'AmauiIconMaterialMonitorWeightSharpFilled';

export default IconMaterialMonitorWeightSharpFilled;
