import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial8mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='8mpSharp'
      short_name='8mp'

      {...props}
    >
      <path d="M10 11.5H14.5V5.5H10ZM11.5 8V6.5H13V8ZM11.5 10.5V9H13V10.5ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 15.5V14H16.5V15.5ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial8mpSharp.displayName = 'AmauiIconMaterial8mpSharp';

export default IconMaterial8mpSharp;
