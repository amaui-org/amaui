import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular1BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular1BarW100'

      short_name='SignalCellular1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.225 20.7 15.55-15.55V20.7Zm4.85-.7h10V6.85l-10 10Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1BarW100.displayName = 'AmauiIconMaterialSignalCellular1BarW100';

export default IconMaterialSignalCellular1BarW100;
