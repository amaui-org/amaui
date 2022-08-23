import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarSharp'
      short_name='SignalWifi4Bar'

      {...props}
    >
      <path d="M12 21 0 9Q2.375 6.575 5.487 5.287Q8.6 4 12 4Q15.4 4 18.512 5.287Q21.625 6.575 24 9Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarSharp.displayName = 'AmauiIconMaterialSignalWifi4BarSharp';

export default IconMaterialSignalWifi4BarSharp;
