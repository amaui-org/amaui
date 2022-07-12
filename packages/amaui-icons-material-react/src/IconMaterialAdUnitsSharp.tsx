import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsSharp'
      short_name='AdUnits'

      {...props}
    >
      <path d="M8 9V7H16V9ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  )
});

export default IconMaterialAdUnitsSharp;
