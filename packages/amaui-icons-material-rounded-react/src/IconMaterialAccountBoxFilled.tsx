import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxFilled'

      short_name='AccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17.85q1.35-1.325 3.138-2.088Q9.925 15 12 15t3.863.762q1.787.763 3.137 2.088V5H5ZM12 13q-1.45 0-2.475-1.025Q8.5 10.95 8.5 9.5q0-1.45 1.025-2.475Q10.55 6 12 6q1.45 0 2.475 1.025Q15.5 8.05 15.5 9.5q0 1.45-1.025 2.475Q13.45 13 12 13Zm-7 8q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxFilled.displayName = 'AmauiIconMaterialAccountBoxFilled';

export default IconMaterialAccountBoxFilled;
