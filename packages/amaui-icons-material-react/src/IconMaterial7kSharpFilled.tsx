import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial7kSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kSharpFilled'
      short_name='7k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM7.75 15H9.5L11.35 9H6.5V10.5H9.15ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterial7kSharpFilled.displayName = 'AmauiIconMaterial7kSharpFilled';

export default IconMaterial7kSharpFilled;
