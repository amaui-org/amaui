import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular1BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1BarFilled'

      short_name='SignalCellular1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 22 2v20Zm8-2h10V6.825l-10 10Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1BarFilled.displayName = 'AmauiIconMaterialSignalCellular1BarFilled';

export default IconMaterialSignalCellular1BarFilled;
