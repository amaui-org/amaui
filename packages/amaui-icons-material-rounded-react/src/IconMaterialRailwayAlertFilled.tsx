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
      <path d="M10 17q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q10.625 14 10 14t-1.062.438Q8.5 14.875 8.5 15.5t.438 1.062Q9.375 17 10 17Zm8-6q-2.075 0-3.537-1.463Q13 8.075 13 6t1.463-3.538Q15.925 1 18 1t3.538 1.462Q23 3.925 23 6q0 2.075-1.462 3.537Q20.075 11 18 11Zm0-4q.2 0 .35-.15.15-.15.15-.35v-3q0-.2-.15-.35Q18.2 3 18 3q-.2 0-.35.15-.15.15-.15.35v3q0 .2.15.35.15.15.35.15Zm0 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q18.2 8 18 8q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM4.65 22q-.275 0-.462-.188Q4 21.625 4 21.35q0-.125.075-.288.075-.162.2-.237L5.5 20q-1.475 0-2.487-1.012Q2 17.975 2 16.5V7q0-2.025 1.963-3.013Q5.925 3 10 3h1.65q-.5 1.225-.625 2.475T11.3 8H4v3h9.1q1 1 2.25 1.5T18 13v3.5q0 1.475-1.012 2.488Q15.975 20 14.5 20l1.225.825q.125.075.2.225.075.15.075.3 0 .275-.188.462-.187.188-.462.188Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlertFilled.displayName = 'AmauiIconMaterialRailwayAlertFilled';

export default IconMaterialRailwayAlertFilled;
