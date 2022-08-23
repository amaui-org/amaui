import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkLockedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedSharpW100Filled'
      short_name='NetworkLocked'

      {...props}
    >
      <path d="M17.3 21.4V17H18.3V16Q18.3 15.275 18.788 14.787Q19.275 14.3 20 14.3Q20.725 14.3 21.213 14.787Q21.7 15.275 21.7 16V17H22.675V21.4ZM19 17H21V16Q21 15.575 20.712 15.287Q20.425 15 20 15Q19.575 15 19.288 15.287Q19 15.575 19 16ZM5.15 20.7 20.7 5.15V12H20Q17.925 12 16.462 13.462Q15 14.925 15 17V20.7Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedSharpW100Filled.displayName = 'AmauiIconMaterialNetworkLockedSharpW100Filled';

export default IconMaterialNetworkLockedSharpW100Filled;
