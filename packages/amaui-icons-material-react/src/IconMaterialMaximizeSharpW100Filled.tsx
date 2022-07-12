import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeSharpW100Filled'
      short_name='Maximize'

      {...props}
    >
      <path d="M3.65 4.35V3.65H20.35V4.35Z"/>
    </Icon>
  )
});

export default IconMaterialMaximizeSharpW100Filled;
