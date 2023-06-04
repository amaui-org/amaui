import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery5Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery5Bar'

      short_name='Battery5Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-12h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery5Bar.displayName = 'AmauiIconMaterialBattery5Bar';

export default IconMaterialBattery5Bar;
