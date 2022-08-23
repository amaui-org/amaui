import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial21mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='21mpSharp'
      short_name='21mp'

      {...props}
    >
      <path d="M7.5 11.5H12V10H9V9H12V5.5H7.5V7H10.5V8H7.5ZM14.5 11.5H16V5.5H13V7H14.5ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterial21mpSharp.displayName = 'AmauiIconMaterial21mpSharp';

export default IconMaterial21mpSharp;
