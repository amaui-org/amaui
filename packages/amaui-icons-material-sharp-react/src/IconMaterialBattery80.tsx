import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery80 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery80'

      short_name='Battery80'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Z"/>
    </Icon>
  );
});

IconMaterialBattery80.displayName = 'AmauiIconMaterialBattery80';

export default IconMaterialBattery80;
