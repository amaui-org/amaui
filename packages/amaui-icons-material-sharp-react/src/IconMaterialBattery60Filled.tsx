import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery60Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery60Filled'

      short_name='Battery60'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery60Filled.displayName = 'AmauiIconMaterialBattery60Filled';

export default IconMaterialBattery60Filled;
