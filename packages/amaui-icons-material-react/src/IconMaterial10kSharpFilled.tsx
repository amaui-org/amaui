import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kSharpFilled'
      short_name='10k'

      {...props}
    >
      <path d="M14 15H15.5V12.75L17.25 15H19L16.75 12L19 9H17.25L15.5 11.25V9H14ZM6 15H7.5V9H5V10.5H6ZM8.5 15H13V9H8.5ZM10 13.5V10.5H11.5V13.5ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

export default IconMaterial10kSharpFilled;
