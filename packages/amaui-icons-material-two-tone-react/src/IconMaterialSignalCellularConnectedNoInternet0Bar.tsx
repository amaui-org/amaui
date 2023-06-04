import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularConnectedNoInternet0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularConnectedNoInternet0Bar'

      short_name='SignalCellularConnectedNoInternet0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M18,20v2H2L22,2v6h-2V6.83L6.83,20H18z"/>
    </Icon>
  );
});

IconMaterialSignalCellularConnectedNoInternet0Bar.displayName = 'AmauiIconMaterialSignalCellularConnectedNoInternet0Bar';

export default IconMaterialSignalCellularConnectedNoInternet0Bar;
