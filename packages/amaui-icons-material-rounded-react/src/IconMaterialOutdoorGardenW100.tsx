import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenW100'

      short_name='OutdoorGarden'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 20.35V6.325L6 3.8l3 2.25 3-2.25 3 2.25 3-2.25 3.35 2.525V20.35Zm.7-.7h5.3V6.675l-2.65-2-2.65 2Zm6 0h5.3V6.675l-2.65-2-2.65 2Zm6 0h5.3V6.675l-2.65-2-2.65 2Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGardenW100.displayName = 'AmauiIconMaterialOutdoorGardenW100';

export default IconMaterialOutdoorGardenW100;
