import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAll'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21H5q-.825 0-1.413-.587Q3 19.825 3 19Zm10-6v6h6v-6h-6Zm0-2h6V5h-6v6Zm-2 0V5H5v6h6Zm0 2H5v6h6v-6Z"/>
    </Icon>
  );
});

IconMaterialBorderAll.displayName = 'AmauiIconMaterialBorderAll';

export default IconMaterialBorderAll;
