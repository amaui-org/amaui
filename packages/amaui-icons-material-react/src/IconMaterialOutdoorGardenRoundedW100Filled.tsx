import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenRoundedW100Filled'
      short_name='OutdoorGarden'

      {...props}
    >
      <path d="M4.25 20.35V6.175l2.35-2.35 2.35 2.35V20.35Zm5.4 0V6.175L12 3.825l2.35 2.35V20.35Zm5.4 0V6.175l2.35-2.35 2.35 2.35V20.35Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGardenRoundedW100Filled.displayName = 'AmauiIconMaterialOutdoorGardenRoundedW100Filled';

export default IconMaterialOutdoorGardenRoundedW100Filled;
