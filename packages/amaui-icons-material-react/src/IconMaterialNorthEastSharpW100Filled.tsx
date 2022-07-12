import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthEastSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastSharpW100Filled'
      short_name='NorthEast'

      {...props}
    >
      <path d="M5.4 19.1 4.9 18.6 17.15 6.35H9.65V5.65H18.35V14.35H17.65V6.85Z"/>
    </Icon>
  )
});

export default IconMaterialNorthEastSharpW100Filled;
