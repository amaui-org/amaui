import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebSharpFilled'
      short_name='Web'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 12.5H14.5V9H4ZM4 18H14.5V14.5H4ZM16.5 18H20V9H16.5Z"/>
    </Icon>
  )
});

export default IconMaterialWebSharpFilled;
