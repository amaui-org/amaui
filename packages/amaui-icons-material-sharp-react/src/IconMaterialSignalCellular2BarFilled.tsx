import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular2BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular2BarFilled'

      short_name='SignalCellular2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 22 2v20Zm11-2h7V6.825l-7 7Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular2BarFilled.displayName = 'AmauiIconMaterialSignalCellular2BarFilled';

export default IconMaterialSignalCellular2BarFilled;
