import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery20Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery20Filled'

      short_name='Battery20'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery20Filled.displayName = 'AmauiIconMaterialBattery20Filled';

export default IconMaterialBattery20Filled;
