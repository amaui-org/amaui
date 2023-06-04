import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClockLoader90 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClockLoader90'

      short_name='ClockLoader90'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976ZM253 349l227 227V256q-64 0-123 24t-104 69Z"/>
    </Icon>
  );
});

IconMaterialClockLoader90.displayName = 'AmauiIconMaterialClockLoader90';

export default IconMaterialClockLoader90;
