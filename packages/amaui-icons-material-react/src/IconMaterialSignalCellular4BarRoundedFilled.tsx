import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellular4BarRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular4BarRoundedFilled'
      short_name='SignalCellular4Bar'

      {...props}
    >
      <path d="M4.425 22Q3.75 22 3.487 21.387Q3.225 20.775 3.7 20.3L20.3 3.7Q20.775 3.225 21.388 3.487Q22 3.75 22 4.425V21Q22 21.425 21.712 21.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular4BarRoundedFilled.displayName = 'AmauiIconMaterialSignalCellular4BarRoundedFilled';

export default IconMaterialSignalCellular4BarRoundedFilled;
