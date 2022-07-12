import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoofingOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoofingOutlinedW700'
      short_name='Roofing'

      {...props}
    >
      <path d="M1 12.375 12 2.5 15.625 5.75V3.625H19.375V9.125L23 12.375H18.3L12 6.725L5.7 12.375ZM8.425 20.375V13.225H15.575V20.375ZM11.2 17.625H12.8V16H11.2Z"/>
    </Icon>
  )
});

export default IconMaterialRoofingOutlinedW700;
