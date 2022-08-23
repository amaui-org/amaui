import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularNullRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNullRounded'
      short_name='SignalCellularNull'

      {...props}
    >
      <path d="M6.825 20H19.975V6.85ZM4.425 22Q3.75 22 3.487 21.387Q3.225 20.775 3.7 20.3L20.275 3.725Q20.75 3.25 21.363 3.512Q21.975 3.775 21.975 4.45V21Q21.975 21.425 21.688 21.712Q21.4 22 20.975 22Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNullRounded.displayName = 'AmauiIconMaterialSignalCellularNullRounded';

export default IconMaterialSignalCellularNullRounded;
