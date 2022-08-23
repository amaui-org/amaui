import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3gMobiledataSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataSharpFilled'
      short_name='3gMobiledata'

      {...props}
    >
      <path d="M3 17V15H8V13H3V11H8V9H3V7H10V17ZM12 17V7H21V9H14V15H19V13H16.5V11H21V17Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataSharpFilled.displayName = 'AmauiIconMaterial3gMobiledataSharpFilled';

export default IconMaterial3gMobiledataSharpFilled;
