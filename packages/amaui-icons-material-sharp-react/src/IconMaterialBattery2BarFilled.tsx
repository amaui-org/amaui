import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery2BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2BarFilled'

      short_name='Battery2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-6h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery2BarFilled.displayName = 'AmauiIconMaterialBattery2BarFilled';

export default IconMaterialBattery2BarFilled;
