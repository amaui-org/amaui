import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationW100Filled'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.25 19.05-.3-.25L12 5.2l6.05 13.6-.3.25L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialNavigationW100Filled.displayName = 'AmauiIconMaterialNavigationW100Filled';

export default IconMaterialNavigationW100Filled;
