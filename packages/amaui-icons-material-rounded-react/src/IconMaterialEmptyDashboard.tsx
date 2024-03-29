import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmptyDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmptyDashboard'

      short_name='EmptyDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18h5.5v-4H6Zm0-5h5.5V6H6Zm6.5 5H18v-7h-5.5Zm0-8H18V6h-5.5ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v2h2v2h-2v2h2v2h-2v2h2v2h-2v2q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialEmptyDashboard.displayName = 'AmauiIconMaterialEmptyDashboard';

export default IconMaterialEmptyDashboard;
