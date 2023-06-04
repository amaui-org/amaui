import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular2Bar'

      short_name='SignalCellular2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z" fillOpacity=".3"/><path d="M14 10L2 22h12V10z"/>
    </Icon>
  );
});

IconMaterialSignalCellular2Bar.displayName = 'AmauiIconMaterialSignalCellular2Bar';

export default IconMaterialSignalCellular2Bar;
