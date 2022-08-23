import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkLockedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedRoundedW100Filled'
      short_name='NetworkLocked'

      {...props}
    >
      <path d="M18.225 21.4Q17.875 21.4 17.6 21.125Q17.325 20.85 17.325 20.5V17.85Q17.325 17.5 17.6 17.25Q17.875 17 18.225 17H18.325V16Q18.325 15.275 18.812 14.787Q19.3 14.3 20.025 14.3Q20.75 14.3 21.238 14.787Q21.725 15.275 21.725 16V17H21.825Q22.175 17 22.438 17.25Q22.7 17.5 22.7 17.85V20.5Q22.7 20.85 22.438 21.125Q22.175 21.4 21.825 21.4ZM19.025 17H21.025V16Q21.025 15.575 20.738 15.287Q20.45 15 20.025 15Q19.6 15 19.312 15.287Q19.025 15.575 19.025 16ZM6.975 20.7Q6.475 20.7 6.288 20.237Q6.1 19.775 6.45 19.425L19.45 6.425Q19.8 6.075 20.263 6.262Q20.725 6.45 20.725 6.95V12H20.025Q17.95 12 16.488 13.462Q15.025 14.925 15.025 17V20.7Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedRoundedW100Filled.displayName = 'AmauiIconMaterialNetworkLockedRoundedW100Filled';

export default IconMaterialNetworkLockedRoundedW100Filled;
