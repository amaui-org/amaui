import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery6Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6Bar'

      short_name='Battery6Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18ZM9 8h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery6Bar.displayName = 'AmauiIconMaterialBattery6Bar';

export default IconMaterialBattery6Bar;
