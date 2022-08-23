import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomReducedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomReducedSharpFilled'
      short_name='AirlineSeatLegroomReduced'

      {...props}
    >
      <path d="M14 21V18L15 14H6V3H12V9H17Q17.825 9 18.413 9.587Q19 10.175 19 11L17 18H20V21ZM3 17V3H5V15H12V17Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomReducedSharpFilled.displayName = 'AmauiIconMaterialAirlineSeatLegroomReducedSharpFilled';

export default IconMaterialAirlineSeatLegroomReducedSharpFilled;
