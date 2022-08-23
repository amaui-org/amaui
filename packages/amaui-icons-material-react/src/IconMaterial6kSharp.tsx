import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial6kSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kSharp'
      short_name='6k'

      {...props}
    >
      <path d="M13 15H14.5V12.75L16.25 15H18.075L15.75 12L18.075 9H16.25L14.5 11.25V9H13ZM8 11.5V10.5H11V9H6.5V15H11V11.5ZM8 14V12.5H9.5V14ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterial6kSharp.displayName = 'AmauiIconMaterial6kSharp';

export default IconMaterial6kSharp;
