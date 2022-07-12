import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRMobiledataSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataSharp'
      short_name='RMobiledata'

      {...props}
    >
      <path d="M2 10V2H9V7.2H7.8L9 10H7L5.85 7.35H4V10ZM4 5.35H7V4H4Z"/>
    </Icon>
  )
});

export default IconMaterialRMobiledataSharp;
