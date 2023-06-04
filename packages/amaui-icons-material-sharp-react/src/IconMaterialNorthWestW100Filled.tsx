import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthWestW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestW100Filled'

      short_name='NorthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.6 19.1 6.35 6.85v7.5h-.7v-8.7h8.7v.7h-7.5L19.1 18.6Z"/>
    </Icon>
  );
});

IconMaterialNorthWestW100Filled.displayName = 'AmauiIconMaterialNorthWestW100Filled';

export default IconMaterialNorthWestW100Filled;
