import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigationOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationOutlinedW100'
      short_name='Navigation'

      {...props}
    >
      <path d="M6.25 19.05 5.95 18.8 12 5.2 18.05 18.8 17.75 19.05 12 16.6ZM7.1 17.9 12 15.8 16.9 17.9 12 6.9ZM12 15.8Z"/>
    </Icon>
  )
});

export default IconMaterialNavigationOutlinedW100;
