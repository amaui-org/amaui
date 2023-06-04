import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Navigation'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5 21-1-1 8-18 8 18-1 1-7-3Zm2.1-3.1 4.9-2.1 4.9 2.1-4.9-11Zm4.9-2.1Z"/>
    </Icon>
  );
});

IconMaterialNavigation.displayName = 'AmauiIconMaterialNavigation';

export default IconMaterialNavigation;
