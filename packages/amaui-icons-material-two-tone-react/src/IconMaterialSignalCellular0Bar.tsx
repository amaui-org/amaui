import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular0Bar'

      short_name='SignalCellular0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M2,22h20V2L2,22z M20,20H6.83L20,6.83V20z"/></g>
    </Icon>
  );
});

IconMaterialSignalCellular0Bar.displayName = 'AmauiIconMaterialSignalCellular0Bar';

export default IconMaterialSignalCellular0Bar;
