import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthWest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWest'

      short_name='NorthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.6 20 7 8.4V15H5V5h10v2H8.4L20 18.6Z"/>
    </Icon>
  );
});

IconMaterialNorthWest.displayName = 'AmauiIconMaterialNorthWest';

export default IconMaterialNorthWest;
