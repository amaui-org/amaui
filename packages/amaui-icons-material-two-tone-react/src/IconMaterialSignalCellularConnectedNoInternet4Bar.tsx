import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularConnectedNoInternet4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularConnectedNoInternet4Bar'

      short_name='SignalCellularConnectedNoInternet4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><path d="M20,18h2v-8h-2V18z M20,22h2v-2h-2V22z M2,22h16V8h4V2L2,22z"/></g></g></g>
    </Icon>
  );
});

IconMaterialSignalCellularConnectedNoInternet4Bar.displayName = 'AmauiIconMaterialSignalCellularConnectedNoInternet4Bar';

export default IconMaterialSignalCellularConnectedNoInternet4Bar;
