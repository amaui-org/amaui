import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatSharpFilled'
      short_name='Chat'

      {...props}
    >
      <path d="M6 14H14V12H6ZM6 11H18V9H6ZM6 8H18V6H6ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

export default IconMaterialChatSharpFilled;
