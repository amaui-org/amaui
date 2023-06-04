import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNullFilled'

      short_name='SignalCellularNull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 21.975 2.025V22Zm4.825-2h13.15V6.85Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNullFilled.displayName = 'AmauiIconMaterialSignalCellularNullFilled';

export default IconMaterialSignalCellularNullFilled;
