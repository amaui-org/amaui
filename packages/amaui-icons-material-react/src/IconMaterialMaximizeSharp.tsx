import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeSharp'
      short_name='Maximize'

      {...props}
    >
      <path d="M3 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialMaximizeSharp.displayName = 'AmauiIconMaterialMaximizeSharp';

export default IconMaterialMaximizeSharp;
