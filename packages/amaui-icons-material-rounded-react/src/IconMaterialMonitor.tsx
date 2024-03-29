import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Monitor'

      short_name='Monitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.425 21q-.575 0-1-.425-.425-.425-.425-1 0-.225.113-.513.112-.287.287-.462L7 18H4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18h-3l.6.6q.175.175.288.45.112.275.112.525 0 .575-.425 1-.425.425-1 .425ZM4 16h16V5H4v11Zm0 0V5v11Z"/>
    </Icon>
  );
});

IconMaterialMonitor.displayName = 'AmauiIconMaterialMonitor';

export default IconMaterialMonitor;
