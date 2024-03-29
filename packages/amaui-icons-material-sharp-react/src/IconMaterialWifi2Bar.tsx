import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifi2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wifi2Bar'

      short_name='Wifi2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.35 15.35-2.1-2.15q1.475-1.475 3.463-2.337Q9.7 10 12 10t4.288.875q1.987.875 3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725Q13.65 13 12 13q-1.65 0-3.1.625-1.45.625-2.55 1.725ZM12 21l3.525-3.55q-.675-.675-1.575-1.063Q13.05 16 12 16q-1.05 0-1.95.387-.9.388-1.575 1.063Z"/>
    </Icon>
  );
});

IconMaterialWifi2Bar.displayName = 'AmauiIconMaterialWifi2Bar';

export default IconMaterialWifi2Bar;
