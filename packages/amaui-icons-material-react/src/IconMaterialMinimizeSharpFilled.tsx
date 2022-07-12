import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeSharpFilled'
      short_name='Minimize'

      {...props}
    >
      <path d="M6 21V19H18V21Z"/>
    </Icon>
  )
});

export default IconMaterialMinimizeSharpFilled;
