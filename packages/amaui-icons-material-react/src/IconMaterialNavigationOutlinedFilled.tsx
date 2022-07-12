import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationOutlinedFilled'
      short_name='Navigation'

      {...props}
    >
      <path d="M5 21 4 20 12 2 20 20 19 21 12 18Z"/>
    </Icon>
  )
});

export default IconMaterialNavigationOutlinedFilled;
