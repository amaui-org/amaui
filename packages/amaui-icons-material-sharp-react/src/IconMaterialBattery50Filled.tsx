import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery50Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery50Filled'

      short_name='Battery50'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery50Filled.displayName = 'AmauiIconMaterialBattery50Filled';

export default IconMaterialBattery50Filled;
