import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutdoorGardenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenSharpW100'
      short_name='OutdoorGarden'

      {...props}
    >
      <path d="M2.65 20.35V6.325L6 3.8l3 2.25 3-2.25 3 2.25 3-2.25 3.35 2.525V20.35Zm.7-.7h5.3V6.675l-2.65-2-2.65 2Zm6 0h5.3V6.675l-2.65-2-2.65 2Zm6 0h5.3V6.675l-2.65-2-2.65 2Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGardenSharpW100.displayName = 'AmauiIconMaterialOutdoorGardenSharpW100';

export default IconMaterialOutdoorGardenSharpW100;
