import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorW100'

      short_name='Monitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.975 19.7q-.275 0-.475-.2-.2-.2-.2-.475 0-.2.1-.438.1-.237.225-.362L10.15 16.7H4.8q-.65 0-1.075-.425Q3.3 15.85 3.3 15.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3h14.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425h-5.35l1.525 1.525q.125.125.225.362.1.238.1.438 0 .275-.2.475-.2.2-.475.2ZM4.8 16h14.4q.35 0 .575-.225Q20 15.55 20 15.2V5.8q0-.35-.225-.575Q19.55 5 19.2 5H4.8q-.35 0-.575.225Q4 5.45 4 5.8v9.4q0 .35.225.575Q4.45 16 4.8 16ZM4 16V5v11Z"/>
    </Icon>
  );
});

IconMaterialMonitorW100.displayName = 'AmauiIconMaterialMonitorW100';

export default IconMaterialMonitorW100;
