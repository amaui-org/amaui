import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial6mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='6mpSharp'
      short_name='6mp'

      {...props}
    >
      <path d="M10 11.5H14.5V8H11.5V7H14.5V5.5H10ZM11.5 10.5V9H13V10.5ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial6mpSharp.displayName = 'AmauiIconMaterial6mpSharp';

export default IconMaterial6mpSharp;
