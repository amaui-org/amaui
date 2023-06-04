import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomReducedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomReducedW100'

      short_name='AirlineSeatLegroomReduced'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.15 20v-1.3l1.4-4.05H5.7v-11h4.7v7.3h6.3q.525 0 .913.362.387.363.437.888l-2.2 6.5h2.6V20ZM4 16.35V3.65h.7v12h7v.7Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomReducedW100.displayName = 'AmauiIconMaterialAirlineSeatLegroomReducedW100';

export default IconMaterialAirlineSeatLegroomReducedW100;
