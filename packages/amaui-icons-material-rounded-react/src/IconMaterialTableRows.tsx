import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRows'

      short_name='TableRows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 19v-3H5v3h14Zm0-5v-4H5v4h14Zm0-6V5H5v3h14ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialTableRows.displayName = 'AmauiIconMaterialTableRows';

export default IconMaterialTableRows;
