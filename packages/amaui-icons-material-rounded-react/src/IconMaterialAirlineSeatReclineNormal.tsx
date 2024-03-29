import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineNormal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineNormal'

      short_name='AirlineSeatReclineNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20q-.825 0-1.412-.587Q6 18.825 6 18V8q0-.425.287-.713Q6.575 7 7 7t.713.287Q8 7.575 8 8v10h6q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 20 14 20Zm3.5-14q-.825 0-1.412-.588Q9.5 4.825 9.5 4t.588-1.413Q10.675 2 11.5 2t1.413.587Q13.5 3.175 13.5 4q0 .825-.587 1.412Q12.325 6 11.5 6ZM17 22q-.425 0-.712-.288Q16 21.425 16 21v-4h-5q-.825 0-1.412-.587Q9 15.825 9 15V9.5q0-1.05.725-1.775Q10.45 7 11.5 7q1.05 0 1.775.725Q14 8.45 14 9.5V14h2q.825 0 1.413.587Q18 15.175 18 16v5q0 .425-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineNormal.displayName = 'AmauiIconMaterialAirlineSeatReclineNormal';

export default IconMaterialAirlineSeatReclineNormal;
