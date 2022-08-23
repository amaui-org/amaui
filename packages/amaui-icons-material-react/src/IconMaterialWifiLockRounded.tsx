import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiLockRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockRounded'
      short_name='WifiLock'

      {...props}
    >
      <path d="M12 20.575Q11.8 20.575 11.625 20.512Q11.45 20.45 11.3 20.3L0.7 9.7Q0.4 9.4 0.413 8.987Q0.425 8.575 0.725 8.3Q3.05 6.2 5.95 5.1Q8.85 4 12 4Q15.15 4 18.05 5.1Q20.95 6.2 23.275 8.3Q23.575 8.575 23.588 8.987Q23.6 9.4 23.3 9.7L22 11H19Q17.35 11 16.175 12.188Q15 13.375 15 15V18L12.7 20.3Q12.55 20.45 12.375 20.512Q12.2 20.575 12 20.575ZM17.85 21Q17.5 21 17.25 20.75Q17 20.5 17 20.15V16.85Q17 16.5 17.25 16.25Q17.5 16 17.85 16H18V15Q18 14.175 18.587 13.587Q19.175 13 20 13Q20.825 13 21.413 13.587Q22 14.175 22 15V16H22.15Q22.5 16 22.75 16.25Q23 16.5 23 16.85V20.15Q23 20.5 22.75 20.75Q22.5 21 22.15 21ZM19 16H21V15Q21 14.575 20.712 14.287Q20.425 14 20 14Q19.575 14 19.288 14.287Q19 14.575 19 15Z"/>
    </Icon>
  );
});

IconMaterialWifiLockRounded.displayName = 'AmauiIconMaterialWifiLockRounded';

export default IconMaterialWifiLockRounded;
