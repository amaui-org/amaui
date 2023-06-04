import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tablet'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 6h14v12H5z" opacity=".3"/><path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>
    </Icon>
  );
});

IconMaterialTablet.displayName = 'AmauiIconMaterialTablet';

export default IconMaterialTablet;
