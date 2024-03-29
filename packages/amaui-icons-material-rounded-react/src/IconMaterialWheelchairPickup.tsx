import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWheelchairPickup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickup'

      short_name='WheelchairPickup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 6q-.825 0-1.412-.588Q4.5 4.825 4.5 4t.588-1.413Q5.675 2 6.5 2t1.412.587Q8.5 3.175 8.5 4q0 .825-.588 1.412Q7.325 6 6.5 6ZM6 22q-.425 0-.713-.288Q5 21.425 5 21v-6H4q-.425 0-.712-.288Q3 14.425 3 14V9q0-.825.587-1.413Q4.175 7 5 7h3q.825 0 1.413.587Q10 8.175 10 9v1.95q-1.575.9-2.537 2.5Q6.5 15.05 6.5 17q0 1.425.525 2.688Q7.55 20.95 8.5 21.9v.1Zm7.5 0q-2.075 0-3.537-1.462Q8.5 19.075 8.5 17q0-1.675.988-2.963.987-1.287 2.512-1.787v2.175q-.675.4-1.087 1.075-.413.675-.413 1.5 0 1.25.875 2.125T13.5 20q1.25 0 2.125-.875T16.5 17h2q0 2.075-1.462 3.538Q15.575 22 13.5 22Zm6.875-3.125L18.45 16H14q-.425 0-.712-.288Q13 15.425 13 15V9q0-.425.288-.713Q13.575 8 14 8t.713.287Q15 8.575 15 9v5h4.025q.25 0 .475.125.225.125.35.325l2.2 3.325q.225.35.138.75-.088.4-.438.625-.35.225-.75.15-.4-.075-.625-.425Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickup.displayName = 'AmauiIconMaterialWheelchairPickup';

export default IconMaterialWheelchairPickup;
