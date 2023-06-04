import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery0Bar'

      short_name='Battery0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-2h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery0Bar.displayName = 'AmauiIconMaterialBattery0Bar';

export default IconMaterialBattery0Bar;
