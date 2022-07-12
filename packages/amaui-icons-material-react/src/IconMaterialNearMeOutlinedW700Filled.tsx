import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeOutlinedW700Filled'
      short_name='NearMe'

      {...props}
    >
      <path d="M11.875 21.85 8.95 14.6 1.7 11.675V9.125L22.3 1.225L14.425 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialNearMeOutlinedW700Filled;
