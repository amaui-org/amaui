import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifiOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOffRounded'
      short_name='SignalWifiOff'

      {...props}
    >
      <path d="M17.875 15.05 7.425 4.6Q8.55 4.3 9.688 4.15Q10.825 4 12 4Q15.15 4 18.038 5.125Q20.925 6.25 23.275 8.325Q23.575 8.6 23.588 9Q23.6 9.4 23.3 9.7ZM19.8 22.6 15.1 17.9 12.7 20.3Q12.55 20.45 12.375 20.512Q12.2 20.575 12 20.575Q11.8 20.575 11.625 20.512Q11.45 20.45 11.3 20.3L0.7 9.7Q0.4 9.4 0.413 9Q0.425 8.6 0.725 8.325Q1.375 7.75 2.062 7.237Q2.75 6.725 3.5 6.3L1.4 4.2Q1.125 3.925 1.125 3.5Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.475 21.9Q21.475 22.325 21.2 22.6Q20.925 22.875 20.5 22.875Q20.075 22.875 19.8 22.6Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOffRounded.displayName = 'AmauiIconMaterialSignalWifiOffRounded';

export default IconMaterialSignalWifiOffRounded;
