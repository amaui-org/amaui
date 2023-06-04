import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi1Bar'

      short_name='Wifi1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21-3.525-3.55q.675-.675 1.575-1.063Q10.95 16 12 16q1.05 0 1.95.387.9.388 1.575 1.063Z"/>
    </Icon>
  );
});

IconMaterialWifi1Bar.displayName = 'AmauiIconMaterialWifi1Bar';

export default IconMaterialWifi1Bar;
