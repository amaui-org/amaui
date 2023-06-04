import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChargingStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationFilled'

      short_name='ChargingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 15.5V13h-1.25q-.275 0-.412-.225-.138-.225-.013-.45l2-3.975q.125-.25.4-.188.275.063.275.338V11h1.25q.275 0 .413.225.137.225.012.45l-2 3.975q-.125.25-.4.188-.275-.063-.275-.338ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialChargingStationFilled.displayName = 'AmauiIconMaterialChargingStationFilled';

export default IconMaterialChargingStationFilled;
