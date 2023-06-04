import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarFilled'

      short_name='SignalWifi4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.375-2.425 5.487-3.713Q8.6 4 12 4t6.512 1.287Q21.625 6.575 24 9Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarFilled.displayName = 'AmauiIconMaterialSignalWifi4BarFilled';

export default IconMaterialSignalWifi4BarFilled;
