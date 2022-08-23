import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial7mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='7mpSharp'
      short_name='7mp'

      {...props}
    >
      <path d="M11.25 11.5H13L14.85 5.5H10V7H12.6ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial7mpSharp.displayName = 'AmauiIconMaterial7mpSharp';

export default IconMaterial7mpSharp;
