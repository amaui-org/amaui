import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedW100'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 20.7 20.7 5.15V12H20V6.85L6.85 20H15v.7Zm12.15.7V17h1v-1q0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213v1h.975v4.4ZM19 17h2v-1q0-.425-.288-.713Q20.425 15 20 15t-.712.287Q19 15.575 19 16Zm-5.575-3.575Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100.displayName = 'AmauiIconMaterialNetworkLockedW100';

export default IconMaterialNetworkLockedW100;
