import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthEastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastW100Filled'

      short_name='NorthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.4 19.1-.5-.5L17.15 6.35h-7.5v-.7h8.7v8.7h-.7v-7.5Z"/>
    </Icon>
  );
});

IconMaterialNorthEastW100Filled.displayName = 'AmauiIconMaterialNorthEastW100Filled';

export default IconMaterialNorthEastW100Filled;
