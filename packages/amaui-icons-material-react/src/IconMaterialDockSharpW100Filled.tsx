import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockSharpW100Filled'
      short_name='Dock'

      {...props}
    >
      <path d="M8.65 20.9V20.2H15.35V20.9ZM7.3 18.2V2.8H16.7V18.2ZM8 15.15H16V5.85H8Z"/>
    </Icon>
  )
});

export default IconMaterialDockSharpW100Filled;
