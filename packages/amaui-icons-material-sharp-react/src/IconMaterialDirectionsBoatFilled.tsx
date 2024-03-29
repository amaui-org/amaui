import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsBoatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBoatFilled'

      short_name='DirectionsBoat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.95 19-2.175-7.625L4 10.6V4h5V1h6v3h5v6.6l2.225.775L20.05 19q-1.25 0-2.275-.587Q16.75 17.825 16 17q-.75.825-1.775 1.413Q13.2 19 12 19q-1.2 0-2.225-.587Q8.75 17.825 8 17q-.75.825-1.775 1.413Q5.2 19 3.95 19ZM2 23v-2h2q1.05 0 2.075-.325Q7.1 20.35 8 19.7q.9.65 1.925.95 1.025.3 2.075.3 1.05 0 2.075-.3 1.025-.3 1.925-.95.9.65 1.925.975Q18.95 21 20 21h2v2h-2q-1.05 0-2.05-.25-1-.25-1.95-.75-.95.5-1.962.75Q13.025 23 12 23t-2.037-.25Q8.95 22.5 8 22q-.95.5-1.95.75T4 23ZM6 9.95 12 8l6 1.95V6H6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBoatFilled.displayName = 'AmauiIconMaterialDirectionsBoatFilled';

export default IconMaterialDirectionsBoatFilled;
