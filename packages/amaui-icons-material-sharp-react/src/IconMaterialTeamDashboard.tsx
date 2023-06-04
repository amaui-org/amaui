import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTeamDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboard'

      short_name='TeamDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm5-2v-6H5v6Zm2 0h7v-6h-7Zm-7-8h14V5H5Z"/>
    </Icon>
  );
});

IconMaterialTeamDashboard.displayName = 'AmauiIconMaterialTeamDashboard';

export default IconMaterialTeamDashboard;
