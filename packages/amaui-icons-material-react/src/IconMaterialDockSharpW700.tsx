import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDockSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockSharpW700'
      short_name='Dock'

      {...props}
    >
      <path d="M7.625 23.375V21.375H16.375V23.375ZM5.625 19.375V0.625H18.375V19.375ZM8.775 16.225H15.225V15.225H8.775ZM8.775 13.225H15.225V6.775H8.775ZM8.775 4.775H15.225V3.775H8.775ZM8.775 4.775V3.775V4.775ZM8.775 16.225V15.225V16.225Z"/>
    </Icon>
  )
});

export default IconMaterialDockSharpW700;
