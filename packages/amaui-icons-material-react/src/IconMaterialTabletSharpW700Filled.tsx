import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletSharpW700Filled'
      short_name='Tablet'

      {...props}
    >
      <path d="M0.225 20.85V3.15H23.775V20.85ZM6.375 17.7H17.625V6.3H6.375Z"/>
    </Icon>
  )
});

export default IconMaterialTabletSharpW700Filled;
