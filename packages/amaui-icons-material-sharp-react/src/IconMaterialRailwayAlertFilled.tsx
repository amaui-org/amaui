import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRailwayAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RailwayAlertFilled'

      short_name='RailwayAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 11q-2.075 0-3.537-1.463Q13 8.075 13 6t1.463-3.538Q15.925 1 18 1t3.538 1.462Q23 3.925 23 6q0 2.075-1.462 3.537Q20.075 11 18 11Zm-.5-4h1V3h-1Zm.5 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q18.2 8 18 8q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm-8 8q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q10.625 14 10 14t-1.062.438Q8.5 14.875 8.5 15.5t.438 1.062Q9.375 17 10 17Zm-6 5v-1l1.5-1q-1.475 0-2.487-1.012Q2 17.975 2 16.5V7q0-2.025 1.963-3.013Q5.925 3 10 3h1.675q-.325.725-.5 1.475Q11 5.225 11 6q0 .5.075 1.012.075.513.225.988H4v3h9.1q1 1 2.25 1.5T18 13v3.5q0 1.475-1.012 2.488Q15.975 20 14.5 20l1.5 1v1Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlertFilled.displayName = 'AmauiIconMaterialRailwayAlertFilled';

export default IconMaterialRailwayAlertFilled;
