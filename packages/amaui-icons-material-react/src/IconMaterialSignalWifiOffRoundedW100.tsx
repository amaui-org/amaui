import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalWifiOffRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiOffRoundedW100'
      short_name='SignalWifiOff'

      {...props}
    >
      <path d="M16.975 14.15 8.5 5.675Q9.375 5.475 10.25 5.387Q11.125 5.3 12 5.3Q14.65 5.3 17.1 6.125Q19.55 6.95 21.6 8.55Q21.825 8.725 21.838 9.012Q21.85 9.3 21.65 9.5ZM20.3 21.3 15.05 16.05 12.525 18.6Q12.4 18.725 12.262 18.775Q12.125 18.825 12 18.825Q11.85 18.825 11.713 18.775Q11.575 18.725 11.475 18.625L2.35 9.5Q2.15 9.3 2.15 9.025Q2.15 8.75 2.375 8.55Q3.1 7.975 3.925 7.487Q4.75 7 5.6 6.6L2.7 3.7Q2.575 3.575 2.575 3.45Q2.575 3.325 2.7 3.2Q2.825 3.075 2.95 3.075Q3.075 3.075 3.2 3.2L20.8 20.8Q20.925 20.925 20.925 21.05Q20.925 21.175 20.8 21.3Q20.675 21.425 20.55 21.425Q20.425 21.425 20.3 21.3Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiOffRoundedW100.displayName = 'AmauiIconMaterialSignalWifiOffRoundedW100';

export default IconMaterialSignalWifiOffRoundedW100;
