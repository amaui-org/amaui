import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery3Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3Bar'

      short_name='Battery3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-8h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery3Bar.displayName = 'AmauiIconMaterialBattery3Bar';

export default IconMaterialBattery3Bar;
