import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoofingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingSharpFilled'
      short_name='Roofing'

      {...props}
    >
      <path d="M2 12 12 3 16 6.6V4H19V9.3L22 12H19L12 5.7L5 12ZM9 20V14H15V20ZM11 18H13V16H11Z"/>
    </Icon>
  )
});

export default IconMaterialRoofingSharpFilled;
