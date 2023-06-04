import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery4BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery4BarFilled'

      short_name='Battery4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm2-10h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialBattery4BarFilled.displayName = 'AmauiIconMaterialBattery4BarFilled';

export default IconMaterialBattery4BarFilled;
