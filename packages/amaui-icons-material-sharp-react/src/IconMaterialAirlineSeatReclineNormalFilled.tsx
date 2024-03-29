import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineNormalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineNormalFilled'

      short_name='AirlineSeatReclineNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20V7h2v11h7v2Zm5.5-14q-.825 0-1.412-.588Q9.5 4.825 9.5 4t.588-1.413Q10.675 2 11.5 2t1.413.587Q13.5 3.175 13.5 4q0 .825-.587 1.412Q12.325 6 11.5 6ZM16 22v-5H9V9.5q0-1.05.725-1.775Q10.45 7 11.5 7q1.05 0 1.775.725Q14 8.45 14 9.5V14h4v8Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineNormalFilled.displayName = 'AmauiIconMaterialAirlineSeatReclineNormalFilled';

export default IconMaterialAirlineSeatReclineNormalFilled;
