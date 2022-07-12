import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationOutlinedW700Filled'
      short_name='Navigation'

      {...props}
    >
      <path d="M4.8 22.525 3 20.725 12 0.475 21 20.725 19.2 22.525 12 19.45Z"/>
    </Icon>
  )
});

export default IconMaterialNavigationOutlinedW700Filled;
