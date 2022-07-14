import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial14mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='14mpSharp'
      short_name='14mp'

      {...props}
    >
      <path d="M8.5 11.5H10V5.5H7V7H8.5ZM14.5 11.5H16V10H17V8.5H16V5.5H14.5V8.5H13V5.5H11.5V10H14.5ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  );
});

export default IconMaterial14mpSharp;
