import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSharpW700Filled'
      short_name='Home'

      {...props}
    >
      <path d="M3.15 21.85V8.575L12 1.925L20.85 8.575V21.85H14.2V13.8H9.8V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialHomeSharpW700Filled;
