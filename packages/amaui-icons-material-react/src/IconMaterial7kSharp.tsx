import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial7kSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='7kSharp'
      short_name='7k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18.075L15.75 12L18.075 9H16.25L14.5 11.25V9H13ZM7.75 15H9.5L11.35 9H6.5V10.5H9.15ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterial7kSharp;
