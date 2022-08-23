import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkLockedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedSharpFilled'
      short_name='NetworkLocked'

      {...props}
    >
      <path d="M17 22V17H18V16Q18 15.175 18.587 14.587Q19.175 14 20 14Q20.825 14 21.413 14.587Q22 15.175 22 16V17H23V22ZM19 17H21V16Q21 15.575 20.712 15.287Q20.425 15 20 15Q19.575 15 19.288 15.287Q19 15.575 19 16ZM2 22 22 2V12H20Q17.925 12 16.462 13.462Q15 14.925 15 17V22Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedSharpFilled.displayName = 'AmauiIconMaterialNetworkLockedSharpFilled';

export default IconMaterialNetworkLockedSharpFilled;
