import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthEastSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastSharpW700Filled'
      short_name='NorthEast'

      {...props}
    >
      <path d="M5.4 20.8 3.2 18.6 14.225 7.575H8.425V4.425H19.575V15.575H16.425V9.775Z"/>
    </Icon>
  )
});

export default IconMaterialNorthEastSharpW700Filled;
