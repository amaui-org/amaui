import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2kSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2kSharpFilled'
      short_name='2k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM6.5 15H11V13.5H8V12.5H11V9H6.5V10.5H9.5V11.5H6.5ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterial2kSharpFilled.displayName = 'AmauiIconMaterial2kSharpFilled';

export default IconMaterial2kSharpFilled;
