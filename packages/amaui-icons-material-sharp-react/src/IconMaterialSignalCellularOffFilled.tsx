import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOffFilled'

      short_name='SignalCellularOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.9 23.6 19.25 22H2.1l8.6-8.6-8.2-8.2 1.4-1.4 18.4 18.4Zm1.2-4.45-8.6-8.55L22.1 2Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOffFilled.displayName = 'AmauiIconMaterialSignalCellularOffFilled';

export default IconMaterialSignalCellularOffFilled;
