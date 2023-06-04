import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2Bar'

      short_name='Battery2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-6h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery2Bar.displayName = 'AmauiIconMaterialBattery2Bar';

export default IconMaterialBattery2Bar;
