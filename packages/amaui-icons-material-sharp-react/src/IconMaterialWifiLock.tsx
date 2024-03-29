import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiLock'

      short_name='WifiLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 9q2.375-2.425 5.487-3.713Q8.6 4 12 4t6.512 1.287Q21.625 6.575 24 9l-2 2h-3q-1.65 0-2.825 1.188Q15 13.375 15 15v3Zm5 0v-5h1v-1q0-.825.587-1.413Q19.175 13 20 13q.825 0 1.413.587Q22 14.175 22 15v1h1v5Zm2-5h2v-1q0-.425-.288-.713Q20.425 14 20 14t-.712.287Q19 14.575 19 15Z"/>
    </Icon>
  );
});

IconMaterialWifiLock.displayName = 'AmauiIconMaterialWifiLock';

export default IconMaterialWifiLock;
