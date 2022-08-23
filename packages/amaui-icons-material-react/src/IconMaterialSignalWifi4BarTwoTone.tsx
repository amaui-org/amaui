import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifi4BarTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarTwoTone'
      short_name='SignalWifi4Bar'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarTwoTone.displayName = 'AmauiIconMaterialSignalWifi4BarTwoTone';

export default IconMaterialSignalWifi4BarTwoTone;
