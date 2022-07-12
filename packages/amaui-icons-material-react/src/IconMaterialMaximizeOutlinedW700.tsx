import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeOutlinedW700'
      short_name='Maximize'

      {...props}
    >
      <path d="M2.425 5.575V2.425H21.575V5.575Z"/>
    </Icon>
  )
});

export default IconMaterialMaximizeOutlinedW700;
