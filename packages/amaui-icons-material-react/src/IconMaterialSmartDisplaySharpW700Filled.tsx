import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplaySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplaySharpW700Filled'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M9.425 16.85 16.95 12 9.425 7.15ZM1.15 20.85V3.15H22.85V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialSmartDisplaySharpW700Filled;
