import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1Bar'

      short_name='SignalCellular1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z" fillOpacity=".3"/><path d="M12 12L2 22h10V12z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1Bar.displayName = 'AmauiIconMaterialSignalCellular1Bar';

export default IconMaterialSignalCellular1Bar;
