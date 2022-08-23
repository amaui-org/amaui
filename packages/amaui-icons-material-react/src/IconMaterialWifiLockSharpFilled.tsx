import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiLockSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockSharpFilled'
      short_name='WifiLock'

      {...props}
    >
      <path d="M12 21 0 9Q2.375 6.575 5.487 5.287Q8.6 4 12 4Q15.4 4 18.512 5.287Q21.625 6.575 24 9L22 11H19Q17.35 11 16.175 12.188Q15 13.375 15 15V18ZM17 21V16H18V15Q18 14.175 18.587 13.587Q19.175 13 20 13Q20.825 13 21.413 13.587Q22 14.175 22 15V16H23V21ZM19 16H21V15Q21 14.575 20.712 14.287Q20.425 14 20 14Q19.575 14 19.288 14.287Q19 14.575 19 15Z"/>
    </Icon>
  );
});

IconMaterialWifiLockSharpFilled.displayName = 'AmauiIconMaterialWifiLockSharpFilled';

export default IconMaterialWifiLockSharpFilled;
