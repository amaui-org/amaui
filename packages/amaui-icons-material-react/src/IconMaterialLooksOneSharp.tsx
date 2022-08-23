import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneSharp'
      short_name='LooksOne'

      {...props}
    >
      <path d="M12 17H14V7H10V9H12ZM21 21H3V3H21ZM5 19H19V5H5ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialLooksOneSharp.displayName = 'AmauiIconMaterialLooksOneSharp';

export default IconMaterialLooksOneSharp;
