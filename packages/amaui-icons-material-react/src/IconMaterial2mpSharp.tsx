import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial2mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='2mpSharp'
      short_name='2mp'

      {...props}
    >
      <path d="M9.75 5.5V7H12.75V8H9.75V11.5H14.25V10H11.25V9H14.25V5.5ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  )
});

export default IconMaterial2mpSharp;
