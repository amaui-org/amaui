import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomExtra = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomExtra'

      short_name='AirlineSeatLegroomExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V3h2v12h9v2Zm16.4 4L15 14H5.5V3h6v6h3q.575 0 1.05.312.475.313.75.838l3.4 6.95 2.475-1.175 1.35 2.7Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomExtra.displayName = 'AmauiIconMaterialAirlineSeatLegroomExtra';

export default IconMaterialAirlineSeatLegroomExtra;
