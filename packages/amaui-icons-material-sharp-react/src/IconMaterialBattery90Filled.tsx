import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery90Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery90Filled'

      short_name='Battery90'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery90Filled.displayName = 'AmauiIconMaterialBattery90Filled';

export default IconMaterialBattery90Filled;
