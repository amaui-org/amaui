import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWheelchairPickupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickupFilled'

      short_name='WheelchairPickup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 6q-.825 0-1.412-.588Q4.5 4.825 4.5 4t.588-1.413Q5.675 2 6.5 2t1.412.587Q8.5 3.175 8.5 4q0 .825-.588 1.412Q7.325 6 6.5 6ZM5 22v-7H3V7h7v3.95q-1.575.9-2.537 2.5Q6.5 15.05 6.5 17q0 1.425.525 2.688Q7.55 20.95 8.5 21.9v.1Zm8.5 0q-2.075 0-3.537-1.462Q8.5 19.075 8.5 17q0-1.675.988-2.963.987-1.287 2.512-1.787v2.175q-.675.4-1.087 1.075-.413.675-.413 1.5 0 1.25.875 2.125T13.5 20q1.25 0 2.125-.875T16.5 17h2q0 2.075-1.462 3.538Q15.575 22 13.5 22Zm7.425-2.3L18.45 16H13V8h2v6h4.55l3.05 4.6Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickupFilled.displayName = 'AmauiIconMaterialWheelchairPickupFilled';

export default IconMaterialWheelchairPickupFilled;
