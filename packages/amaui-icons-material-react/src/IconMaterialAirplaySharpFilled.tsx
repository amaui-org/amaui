import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaySharpFilled'
      short_name='Airplay'

      {...props}
    >
      <path d="M6 21 12 15 18 21ZM2 19V3H22V19H19L12 12L5 19Z"/>
    </Icon>
  );
});

export default IconMaterialAirplaySharpFilled;
