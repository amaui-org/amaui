import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeOutlinedW700'
      short_name='NearMe'

      {...props}
    >
      <path d="M11.875 21.85 8.95 14.6 1.7 11.675V9.125L22.3 1.225L14.425 21.85ZM13.1 16.5 16.825 6.7 7.05 10.45 11.4 12.125ZM11.4 12.125Z"/>
    </Icon>
  )
});

export default IconMaterialNearMeOutlinedW700;
