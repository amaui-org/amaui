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
      <path d="M10 20h10V6.825l-10 10Zm-5.575 2q-.675 0-.938-.613-.262-.612.213-1.087L20.3 3.7q.475-.475 1.088-.213.612.263.612.938V21q0 .425-.288.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular1BarFilled.displayName = 'AmauiIconMaterialSignalCellular1BarFilled';

export default IconMaterialSignalCellular1BarFilled;
