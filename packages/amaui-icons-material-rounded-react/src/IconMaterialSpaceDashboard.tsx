import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceDashboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboard'

      short_name='SpaceDashboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h6V5H5v14Zm8 0h6v-7h-6v7Zm0-9h6V5h-6v5Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboard.displayName = 'AmauiIconMaterialSpaceDashboard';

export default IconMaterialSpaceDashboard;
