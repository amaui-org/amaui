import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlagSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlagSharpW700Filled'
      short_name='Flag'

      {...props}
    >
      <path d="M4.15 21.85V3.15H14.7L15.1 5.15H20.85V16.85H12.3L11.9 14.85H7.3V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialFlagSharpW700Filled;
