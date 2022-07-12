import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockSharp'
      short_name='Dock'

      {...props}
    >
      <path d="M8 23V21H16V23ZM6 19V1H18V19ZM8 17H16V16H8ZM8 14H16V6H8ZM8 4H16V3H8ZM8 4V3V4ZM8 17V16V17Z"/>
    </Icon>
  )
});

export default IconMaterialDockSharp;
