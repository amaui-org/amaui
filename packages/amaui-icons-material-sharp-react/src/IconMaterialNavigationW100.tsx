import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationW100'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.25 19.05-.3-.25L12 5.2l6.05 13.6-.3.25L12 16.6Zm.85-1.15 4.9-2.1 4.9 2.1-4.9-11Zm4.9-2.1Z"/>
    </Icon>
  );
});

IconMaterialNavigationW100.displayName = 'AmauiIconMaterialNavigationW100';

export default IconMaterialNavigationW100;
