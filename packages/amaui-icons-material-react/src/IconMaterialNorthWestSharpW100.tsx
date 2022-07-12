import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthWestSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestSharpW100'
      short_name='NorthWest'

      {...props}
    >
      <path d="M18.6 19.1 6.35 6.85V14.35H5.65V5.65H14.35V6.35H6.85L19.1 18.6Z"/>
    </Icon>
  )
});

export default IconMaterialNorthWestSharpW100;
