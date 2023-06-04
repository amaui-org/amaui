import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMinimizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeW100'

      short_name='Minimize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.975 20.35q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h10.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialMinimizeW100.displayName = 'AmauiIconMaterialMinimizeW100';

export default IconMaterialMinimizeW100;
