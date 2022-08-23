import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial5kSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kSharp'
      short_name='5k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18.075L15.75 12L18.075 9H16.25L14.5 11.25V9H13ZM6.5 15H11V11.5H8V10.5H11V9H6.5V12.5H9.5V13.5H6.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial5kSharp.displayName = 'AmauiIconMaterial5kSharp';

export default IconMaterial5kSharp;
