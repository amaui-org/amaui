import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifi4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4Bar'

      short_name='SignalWifi4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4Bar.displayName = 'AmauiIconMaterialSignalWifi4Bar';

export default IconMaterialSignalWifi4Bar;
