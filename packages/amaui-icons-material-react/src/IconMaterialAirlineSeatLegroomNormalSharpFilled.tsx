import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomNormalSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomNormalSharpFilled'
      short_name='AirlineSeatLegroomNormal'

      {...props}
    >
      <path d="M16 21V14H6V3H12V9H17Q17.825 9 18.413 9.587Q19 10.175 19 11V18H22V21ZM3 17V3H5V15H14V17Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomNormalSharpFilled.displayName = 'AmauiIconMaterialAirlineSeatLegroomNormalSharpFilled';

export default IconMaterialAirlineSeatLegroomNormalSharpFilled;
