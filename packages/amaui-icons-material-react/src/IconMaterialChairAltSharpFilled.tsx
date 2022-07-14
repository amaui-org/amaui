import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairAltSharpFilled'
      short_name='ChairAlt'

      {...props}
    >
      <path d="M5 21V12H8V10H5V3H19V10H16V12H19V21H17V18H7V21ZM10 12H14V10H10Z"/>
    </Icon>
  );
});

export default IconMaterialChairAltSharpFilled;
