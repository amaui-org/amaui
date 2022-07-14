import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3gMobiledataSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataSharp'
      short_name='3gMobiledata'

      {...props}
    >
      <path d="M3 17V15H8V13H3V11H8V9H3V7H10V17ZM12 17V7H21V9H14V15H19V13H16.5V11H21V17Z"/>
    </Icon>
  );
});

export default IconMaterial3gMobiledataSharp;
