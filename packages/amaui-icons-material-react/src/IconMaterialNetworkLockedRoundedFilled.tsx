import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkLockedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedRoundedFilled'
      short_name='NetworkLocked'

      {...props}
    >
      <path d="M17.875 22Q17.525 22 17.275 21.75Q17.025 21.5 17.025 21.15V17.85Q17.025 17.5 17.275 17.25Q17.525 17 17.875 17H18.025V16Q18.025 15.175 18.613 14.587Q19.2 14 20.025 14Q20.85 14 21.438 14.587Q22.025 15.175 22.025 16V17H22.175Q22.525 17 22.775 17.25Q23.025 17.5 23.025 17.85V21.15Q23.025 21.5 22.775 21.75Q22.525 22 22.175 22ZM19.025 17H21.025V16Q21.025 15.575 20.738 15.287Q20.45 15 20.025 15Q19.6 15 19.312 15.287Q19.025 15.575 19.025 16ZM4.45 22Q3.775 22 3.513 21.387Q3.25 20.775 3.725 20.3L20.325 3.7Q20.8 3.225 21.413 3.487Q22.025 3.75 22.025 4.425V12H20.025Q17.95 12 16.488 13.462Q15.025 14.925 15.025 17V22Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedRoundedFilled.displayName = 'AmauiIconMaterialNetworkLockedRoundedFilled';

export default IconMaterialNetworkLockedRoundedFilled;
