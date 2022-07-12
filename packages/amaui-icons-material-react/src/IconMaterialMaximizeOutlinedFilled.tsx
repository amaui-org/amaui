import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeOutlinedFilled'
      short_name='Maximize'

      {...props}
    >
      <path d="M3 5V3H21V5Z"/>
    </Icon>
  )
});

export default IconMaterialMaximizeOutlinedFilled;
