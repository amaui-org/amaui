import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial11mpSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='11mpSharpFilled'
      short_name='11mp'

      {...props}
    >
      <path d="M9.5 11.5H11V5.5H8V7H9.5ZM14.5 11.5H16V5.5H13V7H14.5ZM3 21V3H21V21ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15Z"/>
    </Icon>
  )
});

export default IconMaterial11mpSharpFilled;
