import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStoreSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreSharpFilled'
      short_name='Store'

      {...props}
    >
      <path d="M4 6V4H20V6ZM4 20V14H3V12L4 7H20L21 12V14H20V20H18V14H14V20ZM6 18H12V14H6Z"/>
    </Icon>
  )
});

export default IconMaterialStoreSharpFilled;
