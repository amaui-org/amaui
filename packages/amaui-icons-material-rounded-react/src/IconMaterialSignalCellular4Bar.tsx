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
      <path d="M4.425 22q-.675 0-.938-.613-.262-.612.213-1.087L20.3 3.7q.475-.475 1.088-.213.612.263.612.938V21q0 .425-.288.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4Bar.displayName = 'AmauiIconMaterialSignalCellular4Bar';

export default IconMaterialSignalCellular4Bar;
