import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomNormalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalFilled'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 21v-7H6V3h6v6h5q.825 0 1.413.587Q19 10.175 19 11v7h3v3ZM3 17V3h2v12h9v2Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalFilled.displayName = 'AmauiIconMaterialAirlineSeatLegroomNormalFilled';

export default IconMaterialAirlineSeatLegroomNormalFilled;
