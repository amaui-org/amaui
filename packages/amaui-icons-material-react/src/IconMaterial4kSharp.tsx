import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4kSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kSharp'
      short_name='4k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18.075L15.75 12L18.075 9H16.25L14.5 11.25V9H13ZM6.5 13.5H9.5V15H11V13.5H12V12H11V9H9.5V12H8V9H6.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial4kSharp.displayName = 'AmauiIconMaterial4kSharp';

export default IconMaterial4kSharp;
