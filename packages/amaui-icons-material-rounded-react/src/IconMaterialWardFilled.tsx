import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WardFilled'

      short_name='Ward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 2h2q.425 0 .713.287Q6 2.575 6 3v19q-.825 0-1.412-.587Q4 20.825 4 20V4H3q-.425 0-.712-.288Q2 3.425 2 3t.288-.713Q2.575 2 3 2Zm6 20q-.825 0-1.412-.587Q7 20.825 7 20V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm0-11.475q.45-.275.95-.4Q10.45 10 11 10h5q.55 0 1.05.125t.95.4V4H9ZM13.5 9q-.825 0-1.412-.588Q11.5 7.825 11.5 7t.588-1.412Q12.675 5 13.5 5t1.413.588Q15.5 6.175 15.5 7t-.587 1.412Q14.325 9 13.5 9Zm-1 8v1q0 .425.288.712.287.288.712.288t.713-.288q.287-.287.287-.712v-1h1q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q15.925 15 15.5 15h-1v-1q0-.425-.287-.713Q13.925 13 13.5 13t-.712.287q-.288.288-.288.713v1h-1q-.425 0-.712.287-.288.288-.288.713t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialWardFilled.displayName = 'AmauiIconMaterialWardFilled';

export default IconMaterialWardFilled;
