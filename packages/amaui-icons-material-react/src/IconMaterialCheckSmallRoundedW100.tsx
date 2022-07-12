import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckSmallRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckSmallRoundedW100'
      short_name='CheckSmall'

      {...props}
    >
      <path d="m10 14.525 6.35-6.375q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25l-6.325 6.3q-.225.225-.525.225-.3 0-.525-.225l-2.325-2.3q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1Z"/>
    </Icon>
  )
});

export default IconMaterialCheckSmallRoundedW100;
