import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardSharpW700Filled'
      short_name='Dashboard'

      {...props}
    >
      <path d="M12.8 8.65V1.5H22.5V8.65ZM1.5 13.65V1.5H11.2V13.65ZM12.8 22.425V10.275H22.5V22.425ZM1.5 22.425V15.275H11.2V22.425Z"/>
    </Icon>
  )
});

export default IconMaterialDashboardSharpW700Filled;
