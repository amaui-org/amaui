import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorW100Filled'

      short_name='Monitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.975 19.7q-.275 0-.475-.2-.2-.2-.2-.475 0-.2.1-.438.1-.237.225-.362L10.15 16.7H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425h-5.35l1.525 1.525q.125.125.225.362.1.238.1.438 0 .275-.2.475-.2.2-.475.2Z"/>
    </Icon>
  );
});

IconMaterialMonitorW100Filled.displayName = 'AmauiIconMaterialMonitorW100Filled';

export default IconMaterialMonitorW100Filled;
