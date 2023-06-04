import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedW100Filled'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.3 21.4V17h1v-1q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v1h.975v4.4ZM19 17h2v-1q0-.425-.288-.713Q20.425 15 20 15t-.712.287Q19 15.575 19 16ZM5.15 20.7 20.7 5.15V12H20q-2.075 0-3.538 1.462Q15 14.925 15 17v3.7Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100Filled.displayName = 'AmauiIconMaterialNetworkLockedW100Filled';

export default IconMaterialNetworkLockedW100Filled;
