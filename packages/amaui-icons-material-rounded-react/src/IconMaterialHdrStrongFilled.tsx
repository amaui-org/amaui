import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrStrongFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrStrongFilled'

      short_name='HdrStrong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 16q-1.65 0-2.825-1.175Q1 13.65 1 12q0-1.65 1.175-2.825Q3.35 8 5 8q1.65 0 2.825 1.175Q9 10.35 9 12q0 1.65-1.175 2.825Q6.65 16 5 16Zm0-2q.825 0 1.412-.588Q7 12.825 7 12t-.588-1.413Q5.825 10 5 10t-1.413.587Q3 11.175 3 12q0 .825.587 1.412Q4.175 14 5 14Zm12 4q-2.5 0-4.25-1.75T11 12q0-2.5 1.75-4.25T17 6q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18Z"/>
    </Icon>
  );
});

IconMaterialHdrStrongFilled.displayName = 'AmauiIconMaterialHdrStrongFilled';

export default IconMaterialHdrStrongFilled;
