import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsSubwayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSubwayFilled'

      short_name='DirectionsSubway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 21q-.275 0-.462-.188Q6 20.625 6 20.35q0-.125.075-.288.075-.162.2-.237L7.5 19q-1.475 0-2.487-1.012Q4 16.975 4 15.5V6q0-2.075 1.925-3.038Q7.85 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 1.475-1.012 2.488Q17.975 19 16.5 19l1.225.825q.125.075.2.225.075.15.075.3 0 .275-.188.462-.187.188-.462.188ZM6 10h5V7H6Zm7 0h5V7h-5Zm-4.5 6q.625 0 1.062-.438Q10 15.125 10 14.5t-.438-1.062Q9.125 13 8.5 13t-1.062.438Q7 13.875 7 14.5t.438 1.062Q7.875 16 8.5 16Zm7 0q.625 0 1.062-.438Q17 15.125 17 14.5t-.438-1.062Q16.125 13 15.5 13t-1.062.438Q14 13.875 14 14.5t.438 1.062Q14.875 16 15.5 16Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSubwayFilled.displayName = 'AmauiIconMaterialDirectionsSubwayFilled';

export default IconMaterialDirectionsSubwayFilled;
