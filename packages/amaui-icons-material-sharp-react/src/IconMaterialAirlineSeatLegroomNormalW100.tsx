import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalW100'

      short_name='AirlineSeatLegroomNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.925 20.25v-5.6h-9.35v-11h4.7v7.3h4.8q.575 0 .963.387.387.388.387.963v6.65h2.7v1.3Zm-11.05-3.9V3.65h.7v12h8.25v.7Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalW100.displayName = 'AmauiIconMaterialAirlineSeatLegroomNormalW100';

export default IconMaterialAirlineSeatLegroomNormalW100;
