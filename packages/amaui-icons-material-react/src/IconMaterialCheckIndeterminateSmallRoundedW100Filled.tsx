import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallRoundedW100Filled'
      short_name='CheckIndeterminateSmall'

      {...props}
    >
      <path d="M8 12.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  )
});

export default IconMaterialCheckIndeterminateSmallRoundedW100Filled;
