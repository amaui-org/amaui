import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageOutlinedFilled'
      short_name='Package'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm2-4h5v-2H7Zm1-4 4-2 4 2V5H8Z"/>
    </Icon>
  )
});

export default IconMaterialPackageOutlinedFilled;
