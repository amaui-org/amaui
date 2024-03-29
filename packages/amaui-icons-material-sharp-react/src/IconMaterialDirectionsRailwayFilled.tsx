import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsRailwayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayFilled'

      short_name='DirectionsRailway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-1l1.5-1q-1.475 0-2.487-1.012Q4 16.975 4 15.5V6q0-2.075 1.925-3.038Q7.85 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 1.475-1.012 2.488Q17.975 19 16.5 19l1.5 1v1Zm0-11h12V7H6Zm6 6q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 13 12 13t-1.062.438q-.438.437-.438 1.062t.438 1.062Q11.375 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayFilled.displayName = 'AmauiIconMaterialDirectionsRailwayFilled';

export default IconMaterialDirectionsRailwayFilled;
