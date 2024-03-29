import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardFilled'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4q.825 0 1.413.587Q11 4.175 11 5v14q0 .825-.587 1.413Q9.825 21 9 21Zm10-11q-.825 0-1.412-.588Q13 8.825 13 8V5q0-.825.588-1.413Q14.175 3 15 3h4q.825 0 1.413.587Q21 4.175 21 5v3q0 .825-.587 1.412Q19.825 10 19 10Zm0 11q-.825 0-1.412-.587Q13 19.825 13 19v-5q0-.825.588-1.413Q14.175 12 15 12h4q.825 0 1.413.587Q21 13.175 21 14v5q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardFilled.displayName = 'AmauiIconMaterialSpaceDashboardFilled';

export default IconMaterialSpaceDashboardFilled;
