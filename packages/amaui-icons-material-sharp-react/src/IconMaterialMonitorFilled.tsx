import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorFilled'

      short_name='Monitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-2l1-1H2V3h20v15h-5l1 1v2Z"/>
    </Icon>
  );
});

IconMaterialMonitorFilled.displayName = 'AmauiIconMaterialMonitorFilled';

export default IconMaterialMonitorFilled;
