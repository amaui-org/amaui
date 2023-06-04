import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular4BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarFilled'

      short_name='SignalCellular4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 22 2v20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4BarFilled.displayName = 'AmauiIconMaterialSignalCellular4BarFilled';

export default IconMaterialSignalCellular4BarFilled;
