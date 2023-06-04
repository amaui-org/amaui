import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1Bar'

      short_name='Battery1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-4h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery1Bar.displayName = 'AmauiIconMaterialBattery1Bar';

export default IconMaterialBattery1Bar;
