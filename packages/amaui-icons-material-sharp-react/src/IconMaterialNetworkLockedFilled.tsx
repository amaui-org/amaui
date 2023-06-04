import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedFilled'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22v-5h1v-1q0-.825.587-1.413Q19.175 14 20 14q.825 0 1.413.587Q22 15.175 22 16v1h1v5Zm2-5h2v-1q0-.425-.288-.713Q20.425 15 20 15t-.712.287Q19 15.575 19 16ZM2 22 22 2v10h-2q-2.075 0-3.538 1.462Q15 14.925 15 17v5Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedFilled.displayName = 'AmauiIconMaterialNetworkLockedFilled';

export default IconMaterialNetworkLockedFilled;
