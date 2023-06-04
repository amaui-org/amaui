import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayFilled'

      short_name='Airplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.425 21q-.675 0-.937-.613-.263-.612.212-1.087l3.6-3.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l3.6 3.6q.475.475.213 1.087-.263.613-.938.613ZM4 19q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-1l-5.575-5.575q-.3-.3-.675-.45-.375-.15-.75-.15t-.75.15q-.375.15-.675.45L5 19Z"/>
    </Icon>
  );
});

IconMaterialAirplayFilled.displayName = 'AmauiIconMaterialAirplayFilled';

export default IconMaterialAirplayFilled;
