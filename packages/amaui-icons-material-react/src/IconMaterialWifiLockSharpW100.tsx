import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiLockSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLockSharpW100'
      short_name='WifiLock'

      {...props}
    >
      <path d="M12 19.15 1.85 9Q3.975 7.175 6.588 6.238Q9.2 5.3 12 5.3Q14.8 5.3 17.413 6.238Q20.025 7.175 22.15 9L20.95 10.2H19Q17.05 10.2 15.675 11.6Q14.3 13 14.3 15V16.85ZM16.3 19.4V15H17.325V14Q17.325 13.275 17.812 12.787Q18.3 12.3 19.025 12.3Q19.75 12.3 20.238 12.787Q20.725 13.275 20.725 14V15H21.7V19.4ZM18.025 15H20.025V14Q20.025 13.575 19.738 13.287Q19.45 13 19.025 13Q18.6 13 18.312 13.287Q18.025 13.575 18.025 14Z"/>
    </Icon>
  );
});

IconMaterialWifiLockSharpW100.displayName = 'AmauiIconMaterialWifiLockSharpW100';

export default IconMaterialWifiLockSharpW100;
