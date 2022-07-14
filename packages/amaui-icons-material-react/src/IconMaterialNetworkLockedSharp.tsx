import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNetworkLockedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedSharp'
      short_name='NetworkLocked'

      {...props}
    >
      <path d="M2 22 22 2V12H20V6.825L6.825 20H15V22ZM17 22V17H18V16Q18 15.175 18.587 14.587Q19.175 14 20 14Q20.825 14 21.413 14.587Q22 15.175 22 16V17H23V22ZM19 17H21V16Q21 15.575 20.712 15.287Q20.425 15 20 15Q19.575 15 19.288 15.287Q19 15.575 19 16ZM13.425 13.425Q13.425 13.425 13.425 13.425Q13.425 13.425 13.425 13.425Z"/>
    </Icon>
  );
});

export default IconMaterialNetworkLockedSharp;
