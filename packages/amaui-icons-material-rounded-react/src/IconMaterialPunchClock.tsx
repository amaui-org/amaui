import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPunchClock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PunchClock'

      short_name='PunchClock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V8q0-.825.587-1.412Q4.175 6 5 6h1V3q0-.825.588-1.413Q7.175 1 8 1h8q.825 0 1.413.587Q18 2.175 18 3v3h1q.825 0 1.413.588Q21 7.175 21 8v12q0 .825-.587 1.413Q19.825 22 19 22ZM8 6h8V3H8ZM5 20h14V8H5v12Zm7-1q-2.075 0-3.537-1.462Q7 16.075 7 14q0-2.075 1.463-3.538Q9.925 9 12 9t3.538 1.462Q17 11.925 17 14q0 2.075-1.462 3.538Q14.075 19 12 19Zm0-1.5q1.45 0 2.475-1.025Q15.5 15.45 15.5 14q0-1.45-1.025-2.475Q13.45 10.5 12 10.5q-1.45 0-2.475 1.025Q8.5 12.55 8.5 14q0 1.45 1.025 2.475Q10.55 17.5 12 17.5Zm.8-2-1.15-1.15q-.05-.05-.15-.35v-2q0-.2.15-.35.15-.15.35-.15.2 0 .35.15.15.15.15.35v1.8l1 1q.15.15.15.35 0 .2-.15.35-.15.15-.35.15-.2 0-.35-.15ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPunchClock.displayName = 'AmauiIconMaterialPunchClock';

export default IconMaterialPunchClock;
