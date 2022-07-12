import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatSharpW700'
      short_name='Chat'

      {...props}
    >
      <path d="M6 14H14V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM1.15 22.85V1.15H22.85V18.85H5.15ZM4.3 15.975 4.575 15.7H19.7V4.3H4.3ZM4.3 15.975V4.3V15.7Z"/>
    </Icon>
  )
});

export default IconMaterialChatSharpW700;
