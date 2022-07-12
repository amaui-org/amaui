import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsSharpW700Filled'
      short_name='AdUnits'

      {...props}
    >
      <path d="M8.375 9.375V7.375H15.625V9.375ZM4.225 23.775V0.225H19.775V23.775ZM7.375 17.625H16.625V6.375H7.375Z"/>
    </Icon>
  )
});

export default IconMaterialAdUnitsSharpW700Filled;
