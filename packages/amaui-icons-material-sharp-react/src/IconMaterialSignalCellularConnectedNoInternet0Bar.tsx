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
      <path d="M18 20v2H2L22 2v6h-2V6.825L6.825 20Zm2-2v-8h2v8Zm0 4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularConnectedNoInternet0Bar.displayName = 'AmauiIconMaterialSignalCellularConnectedNoInternet0Bar';

export default IconMaterialSignalCellularConnectedNoInternet0Bar;
