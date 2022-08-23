import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationSharpW100Filled'
      short_name='Navigation'

      {...props}
    >
      <path d="M6.25 19.05 5.95 18.8 12 5.2 18.05 18.8 17.75 19.05 12 16.6Z"/>
    </Icon>
  );
});

IconMaterialNavigationSharpW100Filled.displayName = 'AmauiIconMaterialNavigationSharpW100Filled';

export default IconMaterialNavigationSharpW100Filled;
