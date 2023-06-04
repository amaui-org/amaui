import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomExtraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtraW100'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 16.35V3.65h.7v12h9v.7Zm15.05 3.45-2.55-5.15H5.7v-11h4.7v7.3h4.2q.4 0 .7.225.3.225.5.575L18.85 18l2.5-1.15.55 1.15Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtraW100.displayName = 'AmauiIconMaterialAirlineSeatLegroomExtraW100';

export default IconMaterialAirlineSeatLegroomExtraW100;
