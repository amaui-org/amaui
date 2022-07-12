import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockSharpW700Filled'
      short_name='Dock'

      {...props}
    >
      <path d="M7.625 23.375V21.375H16.375V23.375ZM5.625 19.375V0.625H18.375V19.375ZM8.775 13.225H15.225V6.775H8.775Z"/>
    </Icon>
  )
});

export default IconMaterialDockSharpW700Filled;
