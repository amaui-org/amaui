import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSharpFilled'
      short_name='Home'

      {...props}
    >
      <path d="M4 21V9L12 3L20 9V21H14V14H10V21Z"/>
    </Icon>
  );
});

IconMaterialHomeSharpFilled.displayName = 'AmauiIconMaterialHomeSharpFilled';

export default IconMaterialHomeSharpFilled;
