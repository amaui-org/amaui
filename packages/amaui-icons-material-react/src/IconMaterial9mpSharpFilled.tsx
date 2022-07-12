import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial9mpSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='9mpSharpFilled'
      short_name='9mp'

      {...props}
    >
      <path d="M10 11.5H14.5V5.5H10V9H13V10H10ZM11.5 8V6.5H13V8ZM3 21V3H21V21ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  )
});

export default IconMaterial9mpSharpFilled;
