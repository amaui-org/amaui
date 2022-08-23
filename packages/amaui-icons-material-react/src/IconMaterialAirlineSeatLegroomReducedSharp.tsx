import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomReducedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomReducedSharp'
      short_name='AirlineSeatLegroomReduced'

      {...props}
    >
      <path d="M14 21V18L15 14H6V3H12V9H17Q17.825 9 18.413 9.587Q19 10.175 19 11L17 18H20V21ZM3 17V3H5V15H12V17Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomReducedSharp.displayName = 'AmauiIconMaterialAirlineSeatLegroomReducedSharp';

export default IconMaterialAirlineSeatLegroomReducedSharp;
