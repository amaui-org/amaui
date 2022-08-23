import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial6kSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kSharpFilled'
      short_name='6k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18L15.75 12L18 9H16.25L14.5 11.25V9H13ZM8 11.5V10.5H11V9H6.5V15H11V11.5ZM8 14V12.5H9.5V14ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterial6kSharpFilled.displayName = 'AmauiIconMaterial6kSharpFilled';

export default IconMaterial6kSharpFilled;
