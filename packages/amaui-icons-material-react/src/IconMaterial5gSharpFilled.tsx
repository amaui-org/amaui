import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5gSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5gSharpFilled'
      short_name='5g'

      {...props}
    >
      <path d="M3 17V15H8V13H3V7H10V9H5V11H10V17ZM12 17V7H21V9H14V15H19V13H16.5V11H21V17Z"/>
    </Icon>
  )
});

export default IconMaterial5gSharpFilled;
