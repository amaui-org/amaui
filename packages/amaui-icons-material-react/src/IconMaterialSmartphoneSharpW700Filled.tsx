import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartphoneSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneSharpW700Filled'
      short_name='Smartphone'

      {...props}
    >
      <path d="M4.225 23.775V0.225H19.775V23.775ZM7.375 17.625H16.625V6.375H7.375Z"/>
    </Icon>
  )
});

export default IconMaterialSmartphoneSharpW700Filled;
