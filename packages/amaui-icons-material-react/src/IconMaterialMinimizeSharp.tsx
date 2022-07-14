import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeSharp'
      short_name='Minimize'

      {...props}
    >
      <path d="M6 21V19H18V21Z"/>
    </Icon>
  );
});

export default IconMaterialMinimizeSharp;
