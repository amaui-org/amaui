import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewList = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewList'

      short_name='ViewList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7q0-.825.587-1.412Q4.175 5 5 5h14q.825 0 1.413.588Q21 6.175 21 7v10q0 .825-.587 1.413Q19.825 19 19 19H5q-.825 0-1.413-.587Q3 17.825 3 17Zm2-8h2V7H5v2Zm4 0h10V7H9v2Zm0 4h10v-2H9v2Zm0 4h10v-2H9v2Zm-4 0h2v-2H5v2Zm0-4h2v-2H5v2Z"/>
    </Icon>
  );
});

IconMaterialViewList.displayName = 'AmauiIconMaterialViewList';

export default IconMaterialViewList;
