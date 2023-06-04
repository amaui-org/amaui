import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenW100Filled'

      short_name='OutdoorGarden'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.25 20.35V6.175l2.35-2.35 2.35 2.35V20.35Zm5.4 0V6.175L12 3.825l2.35 2.35V20.35Zm5.4 0V6.175l2.35-2.35 2.35 2.35V20.35Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGardenW100Filled.displayName = 'AmauiIconMaterialOutdoorGardenW100Filled';

export default IconMaterialOutdoorGardenW100Filled;
