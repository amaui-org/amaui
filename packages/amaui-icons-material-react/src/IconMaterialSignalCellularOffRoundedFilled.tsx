import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOffRoundedFilled'
      short_name='SignalCellularOff'

      {...props}
    >
      <path d="M22.1 19.15 13.5 10.6 20.4 3.7Q20.875 3.225 21.488 3.487Q22.1 3.75 22.1 4.425ZM4.525 22Q3.85 22 3.588 21.387Q3.325 20.775 3.8 20.3L10.7 13.4L3.2 5.9Q2.925 5.625 2.925 5.2Q2.925 4.775 3.2 4.5Q3.475 4.225 3.9 4.225Q4.325 4.225 4.6 4.5L21.6 21.5Q21.875 21.775 21.875 22.2Q21.875 22.625 21.6 22.9Q21.325 23.175 20.913 23.175Q20.5 23.175 20.2 22.9L19.25 22Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOffRoundedFilled.displayName = 'AmauiIconMaterialSignalCellularOffRoundedFilled';

export default IconMaterialSignalCellularOffRoundedFilled;
