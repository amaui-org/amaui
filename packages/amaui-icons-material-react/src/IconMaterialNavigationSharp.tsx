import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationSharp'
      short_name='Navigation'

      {...props}
    >
      <path d="M5 21 4 20 12 2 20 20 19 21 12 18ZM7.1 17.9 12 15.8 16.9 17.9 12 6.9ZM12 15.8Z"/>
    </Icon>
  );
});

export default IconMaterialNavigationSharp;
