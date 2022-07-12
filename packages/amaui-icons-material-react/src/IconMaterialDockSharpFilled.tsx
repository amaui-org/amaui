import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockSharpFilled'
      short_name='Dock'

      {...props}
    >
      <path d="M8 23V21H16V23ZM6 19V1H18V19ZM8 14H16V6H8Z"/>
    </Icon>
  )
});

export default IconMaterialDockSharpFilled;
