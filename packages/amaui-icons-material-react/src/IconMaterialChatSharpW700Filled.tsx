import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatSharpW700Filled'
      short_name='Chat'

      {...props}
    >
      <path d="M6 14H14V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM1.15 22.85V1.15H22.85V18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialChatSharpW700Filled;
