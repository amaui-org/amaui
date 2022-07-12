import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneSharpFilled'
      short_name='LooksOne'

      {...props}
    >
      <path d="M12 17H14V7H10V9H12ZM21 21H3V3H21Z"/>
    </Icon>
  )
});

export default IconMaterialLooksOneSharpFilled;
