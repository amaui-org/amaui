import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactEmergencyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyFilled'

      short_name='ContactEmergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.25 10.3v.95q0 .325.212.537.213.213.538.213.325 0 .538-.213.212-.212.212-.537v-.95l.825.475q.275.15.575.075.3-.075.45-.35.15-.275.075-.575-.075-.3-.35-.45L19.5 9l.825-.475q.275-.15.35-.45.075-.3-.075-.575-.15-.275-.45-.35-.3-.075-.575.075l-.825.475v-.95q0-.325-.212-.537Q18.325 6 18 6q-.325 0-.538.213-.212.212-.212.537v.95l-.825-.475q-.275-.15-.575-.075-.3.075-.45.35-.15.275-.075.575.075.3.35.45L16.5 9l-.825.475q-.275.15-.35.45-.075.3.075.575.15.275.45.35.3.075.575-.075ZM2 21q-.825 0-1.412-.587Q0 19.825 0 19V5q0-.825.588-1.413Q1.175 3 2 3h20q.825 0 1.413.587Q24 4.175 24 5v14q0 .825-.587 1.413Q22.825 21 22 21Zm7-7q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-6.9 5h13.8q-1.05-1.875-2.9-2.938Q11.15 15 9 15t-4 1.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyFilled.displayName = 'AmauiIconMaterialContactEmergencyFilled';

export default IconMaterialContactEmergencyFilled;
