import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationOutlinedW100Filled'
      short_name='Navigation'

      {...props}
    >
      <path d="M6.25 19.05 5.95 18.8 12 5.2 18.05 18.8 17.75 19.05 12 16.6Z"/>
    </Icon>
  )
});

export default IconMaterialNavigationOutlinedW100Filled;
