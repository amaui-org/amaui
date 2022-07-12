import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeSharpW700Filled'
      short_name='Minimize'

      {...props}
    >
      <path d="M5.425 21.575V18.425H18.575V21.575Z"/>
    </Icon>
  )
});

export default IconMaterialMinimizeSharpW700Filled;
