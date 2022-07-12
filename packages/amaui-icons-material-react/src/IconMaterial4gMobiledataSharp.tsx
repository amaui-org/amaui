import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4gMobiledataSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataSharp'
      short_name='4gMobiledata'

      {...props}
    >
      <path d="M7 17V14H3V7H5V12H7V7H9V12H11V14H9V17ZM12 17V7H21V9H14V15H19V13H16.5V11H21V17Z"/>
    </Icon>
  )
});

export default IconMaterial4gMobiledataSharp;
