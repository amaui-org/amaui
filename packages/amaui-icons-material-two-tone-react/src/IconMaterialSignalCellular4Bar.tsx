import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4Bar'

      short_name='SignalCellular4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 22h20V2L2 22z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4Bar.displayName = 'AmauiIconMaterialSignalCellular4Bar';

export default IconMaterialSignalCellular4Bar;
