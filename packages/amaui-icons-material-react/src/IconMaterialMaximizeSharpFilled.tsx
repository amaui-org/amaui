import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeSharpFilled'
      short_name='Maximize'

      {...props}
    >
      <path d="M3 5V3H21V5Z"/>
    </Icon>
  );
});

IconMaterialMaximizeSharpFilled.displayName = 'AmauiIconMaterialMaximizeSharpFilled';

export default IconMaterialMaximizeSharpFilled;
