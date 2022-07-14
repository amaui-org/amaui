import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1kSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kSharpFilled'
      short_name='1k'

      {...props}
    >
      <path d="M12 15H13.5V12.75L15.25 15H17L14.75 12L17 9H15.25L13.5 11.25V9H12ZM8.5 15H10V9H7V10.5H8.5ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

export default IconMaterial1kSharpFilled;
