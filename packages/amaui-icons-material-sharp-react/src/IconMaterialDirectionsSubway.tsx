import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsSubway = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSubway'

      short_name='DirectionsSubway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-1l1.5-1q-1.475 0-2.487-1.012Q4 16.975 4 15.5V6q0-2.075 1.925-3.038Q7.85 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 1.475-1.012 2.488Q17.975 19 16.5 19l1.5 1v1Zm0-11h5V7H6Zm10.5 2H6h12-1.5ZM13 10h5V7h-5Zm-4.5 6q.625 0 1.062-.438Q10 15.125 10 14.5t-.438-1.062Q9.125 13 8.5 13t-1.062.438Q7 13.875 7 14.5t.438 1.062Q7.875 16 8.5 16Zm7 0q.625 0 1.062-.438Q17 15.125 17 14.5t-.438-1.062Q16.125 13 15.5 13t-1.062.438Q14 13.875 14 14.5t.438 1.062Q14.875 16 15.5 16Zm-8 1h9q.65 0 1.075-.425Q18 16.15 18 15.5V12H6v3.5q0 .65.425 1.075Q6.85 17 7.5 17ZM12 4q-2.15 0-3.562.25Q7.025 4.5 6.45 5h11.2q-.45-.5-1.863-.75Q14.375 4 12 4Zm0 1h5.65-11.2H12Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSubway.displayName = 'AmauiIconMaterialDirectionsSubway';

export default IconMaterialDirectionsSubway;
