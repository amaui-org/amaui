import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4mpSharp'
      short_name='4mp'

      {...props}
    >
      <path d="M12.5 11.5H14V10H15V8.5H14V5.5H12.5V8.5H11V5.5H9.5V10H12.5ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  )
});

export default IconMaterial4mpSharp;
