import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenSharpW700Filled'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M4.4 16.625 3 15.225 8.225 10H4.625V8H11.625V15H9.625V11.4ZM5.225 23.775V17H8.375V17.625H17.625V6.375H8.375V7H5.225V0.225H20.775V23.775Z"/>
    </Icon>
  )
});

export default IconMaterialAddToHomeScreenSharpW700Filled;
