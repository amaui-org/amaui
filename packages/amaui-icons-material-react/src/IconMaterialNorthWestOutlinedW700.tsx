import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthWestOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestOutlinedW700'
      short_name='NorthWest'

      {...props}
    >
      <path d="M18.6 20.8 7.575 9.775V15.575H4.425V4.425H15.575V7.575H9.775L20.8 18.6Z"/>
    </Icon>
  )
});

export default IconMaterialNorthWestOutlinedW700;
