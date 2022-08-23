import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiLockRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockRoundedW100Filled'
      short_name='WifiLock'

      {...props}
    >
      <path d="M12 18.85Q11.85 18.85 11.725 18.8Q11.6 18.75 11.475 18.625L2.35 9.5Q2.15 9.3 2.163 9.025Q2.175 8.75 2.4 8.55Q4.45 6.95 6.9 6.125Q9.35 5.3 12 5.3Q14.65 5.3 17.1 6.125Q19.55 6.95 21.6 8.55Q21.825 8.75 21.838 9.025Q21.85 9.3 21.65 9.5L20.95 10.2H19Q17.05 10.2 15.675 11.6Q14.3 13 14.3 15V16.85L12.525 18.625Q12.4 18.75 12.275 18.8Q12.15 18.85 12 18.85ZM17.2 19.4Q16.85 19.4 16.575 19.125Q16.3 18.85 16.3 18.5V15.9Q16.3 15.55 16.575 15.275Q16.85 15 17.2 15H17.325V14Q17.325 13.275 17.812 12.787Q18.3 12.3 19.025 12.3Q19.75 12.3 20.238 12.787Q20.725 13.275 20.725 14V15H20.85Q21.2 15 21.45 15.275Q21.7 15.55 21.7 15.9V18.5Q21.7 18.85 21.425 19.125Q21.15 19.4 20.8 19.4ZM18.025 15H20.025V14Q20.025 13.575 19.738 13.287Q19.45 13 19.025 13Q18.6 13 18.312 13.287Q18.025 13.575 18.025 14Z"/>
    </Icon>
  );
});

IconMaterialWifiLockRoundedW100Filled.displayName = 'AmauiIconMaterialWifiLockRoundedW100Filled';

export default IconMaterialWifiLockRoundedW100Filled;
