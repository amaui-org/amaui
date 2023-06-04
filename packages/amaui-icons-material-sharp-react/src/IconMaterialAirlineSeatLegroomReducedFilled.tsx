import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomReducedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomReducedFilled'

      short_name='AirlineSeatLegroomReduced'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 21v-3l1-4H6V3h6v6h5q.825 0 1.413.587Q19 10.175 19 11l-2 7h3v3ZM3 17V3h2v12h7v2Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomReducedFilled.displayName = 'AmauiIconMaterialAirlineSeatLegroomReducedFilled';

export default IconMaterialAirlineSeatLegroomReducedFilled;
